$(document).ready(function () {
    // Request ajax get all books
    let getBookUrl = '/api/v1/books',
        getLessionUrl = '/api/v1/lessions',
        firstBookId = null,
        dataConversation = [];
    // Get all book
    axios.get(getBookUrl)
        .then(function (response) {
            // Append category
            var s = document.getElementById('books');
            if (response.data.data.rows) {
                firstBookId = response.data.data.rows[0]['id'];
                response.data.data.rows.forEach((item) => {
                    s.options[s.options.length] = new Option(item['name'], item['id']);
                })
            }
            // Get lession of the first book
            if(firstBookId)
                getLessionUrl += `?book_id=${firstBookId}`;
            axios.get(getLessionUrl)
                .then(function(response){
                    // Append category
                    var s = document.getElementById('lessions');
                    if (response.data.data.rows) {
                        response.data.data.rows.forEach((item) => {
                            s.options[s.options.length] = new Option(item['name'], item['id']);
                        })
                        return false;
                    }   
                })
                .catch(function(err){
                    return false;
                })
        })
        .catch(function (error) {
            return false;
        });
    
    // Process when book has change
    $("#books").change(function() {
        let bookId = $(this).val();
        // Get lession by bookId
        let getLessionUrl = `/api/v1/lessions?book_id=${bookId}`;
        axios.get(getLessionUrl)
            .then(function(response){
                // Append lession of the book
                var s = document.getElementById('lessions');
                if (response.data.data.rows) {
                    // Clear list lession
                    $('#lessions').empty();
                    response.data.data.rows.forEach((item) => {
                        s.options[s.options.length] = new Option(item['name'], item['id']);
                    })
                    return false;
                }   
            })
            .catch(function(err){
                return false;
            })
    });

    // Process append conversation
    $('#add-conversation').on('click', function(){
        // Get content
        let avatarS3Link = $('#avatar').val().trim(),
            audioS3Link = $('#audio').val().trim(),
            sentence = $('#sentence').val().trim();
        if(!avatarS3Link || !sentence)
            return alert('Phải nhập đủ 2 thông tin avatar và câu thoại')
        // Append data conversation
        let content = `<span class="label label-success">${avatarS3Link}</span>: <span>${sentence}</span><br/>`
        $('#all-conversation').append(content);
        // Append data conversation for submit
        let d = {};
        d['avatar'] = avatarS3Link;
        d['audio'] = audioS3Link;
        d['sentence'] = sentence;
        dataConversation.push(d);
        // console.log(dataConversation);
        return false;
    })

    // Process submit upload data
    $('#submit-data').bind('click', function () {
        // Get form data
        let conversation_name = $('#name-conversation').val().trim(),
            conversation_data = dataConversation,
            lessionId = $('#lessions').val().trim(),
            lessionName = $('#lessions').text().trim(),
            coverImageS3Link = $('#cover-image').val().trim(),
            coverVideoS3Link = $('#cover-video').val().trim();
        if (!conversation_name)
            return alert("Bạn phải nhập tên đoạn hội thoại");
        if (!lessionId)
            return alert("Bạn phải chọn bài học");
        if(!conversation_data)
            return alert("Bạn phải thêm nội dung cho đoạn hội thoại");
        // Call axios send data
        let url = '/api/v1/conversations';
        var data = {
            name: conversation_name,
            data: conversation_data,
            lession_id: parseInt(lessionId)
        };
        if(coverImageS3Link)
            data['cover_image'] = coverImageS3Link;
        if(coverVideoS3Link)
            data['cover_video'] = coverVideoS3Link;
        axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
            // other configuration there
        })
            .then(function (response) {
                alert(`Thêm mới đoạn hội thoại ${conversation_name} cho bài học ${lessionName} thành công!`)
                return false;
            })
            .catch(function (error) {
                if (error.response.data['code'] == 409)
                    alert(`Đoạn hội thoại ${conversation_name} của bài học ${lessionName} đã tồn tại trong hệ thống`);
                else
                    alert(`Xảy ra lỗi khi thêm mới đoạn hội thoại ${conversation_name}!`);
                return false;
            });
    })
});