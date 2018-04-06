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

    var flashCardSlect = new SlimSelect({
        select: '#flashcards',
        closeOnSelect: false,
        searchHighlight: true,
        placeholder: 'Placeholder Text Here',
        searchText: 'Not found anything',
        allowDeselect: true,
        onChange: (info) => {
            console.log(info);   
        },
        ajax: function (search, callback) {
          // Check search value. If you dont like it callback(false) or callback('Message String')
        //   if (search.length < 3) {
        //     callback('Need 3 characters')
        //     return
        //   }
      
          // Perform your own ajax request here
          fetch('/api/v1/flash_cards')
          .then(function (response) {
            return response.json()
          })
          .then(function (json) {
            let data = [];
            if(json.status === "success"){
                for (let i = 0; i < json.data.count; i++) {
                    data.push({text: json.data.rows[i].name, value: json.data.rows[i].id})
                }
            }
      
            // Upon successful fetch send data to callback function.
            // Be sure to send data back in the proper format.
            // Refer to the method setData for examples of proper format.
            callback(data)
          })
          .catch(function(error) {
            // If any erros happened send false back through the callback
            callback(false)
          })
        }
      })

    // Process submit upload data
    $('#submit-data').bind('click', function () {
        // Get form data
        let vocabulary_name = $('#name-vocabulary').val().trim(),
            lessionId = $('#lessions').val(),
            vocabulary_data = flashCardSlect.selected(),
            lession_name = $('#lessions').text();
        if (!vocabulary_name)
            return alert("Bạn phải nhập tên phần từ vựng");
        if (!lessionId)
            return alert("Bạn phải chọn bài học");
        if(vocabulary_data.length == 0)
            return alert("Bạn chưa chọn từ vựng");
        vocabulary_data = vocabulary_data.map(item=>{
            return parseInt(item);
        })
        // Call axios send data
        let url = '/api/v1/vocabulary';
        var data = {
            name: vocabulary_name,
            data: vocabulary_data,
            lession_id: parseInt(lessionId)
        };
        axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
            // other configuration there
        })
            .then(function (response) {
                alert(`Thêm mới từ vựng ${vocabulary_name} cho bài học ${lession_name} thành công!`);
                return false;
            })
            .catch(function (error) {
                if (error.response.data['code'] == 409)
                    alert(`Từ vựng ${vocabulary_name} của bài học ${lession_name} đã tồn tại trong hệ thống`);
                else
                    alert(`Xảy ra lỗi khi thêm mới từ vựng ${vocabulary_name}!`);
                return false;
            });
    })
});