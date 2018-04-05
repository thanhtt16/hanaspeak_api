$(document).ready(function () {
    // Request ajax get all books
    let getCategoryUrl = '/api/v1/books'
    axios.get(getCategoryUrl)
        .then(function (response) {
            // Append category
            var s = document.getElementById('books');
            if (response.data.data.rows) {
                response.data.data.rows.forEach((item) => {
                    s.options[s.options.length] = new Option(item['name'], item['id']);
                })
            }
            return false;
        })
        .catch(function (error) {
            return false;
        });


    // Process submit upload data
    $('#submit-data').bind('click', function () {
        // Get form data
        let lession_name = $('#name-lession').val().trim(),
            lession_description = $('#description-lession').val().trim(),
            lession_book = $('#books').val().trim();
        if (!lession_name)
            return alert("Bạn phải nhập tên bài học");
        if (!lession_book)
            return alert("Bạn phải chọn sách cho bài học");
        // Call axios send data
        let url = '/api/v1/lessions';
        var data = {
            name: lession_name,
            description: lession_description,
            book_id: parseInt(lession_book)
        };
        axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
            // other configuration there
        })
            .then(function (response) {
                alert(`Thêm mới bài học ${lession_name} thành công!`)
                return false;
            })
            .catch(function (error) {
                if (error.response.data['code'] == 409)
                    alert(`Bài học ${lession_name} đã tồn tại trong hệ thống`);
                else
                    alert(`Xảy ra lỗi khi thêm mới bài học ${lession_name}!`);
                return false;
            });
    })
});