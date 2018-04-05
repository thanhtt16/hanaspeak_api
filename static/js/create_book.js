$(document).ready(function () {
    // Process submit upload data
    $('#submit-data').bind('click', function () {
        // Get form data
        let book_name = $('#name-book').val().trim(),
            book_description = $('#description-book').val().trim();
        if (!book_name)
            return alert("Bạn phải nhập tên sách");
        // Call axios send data
        let url = '/api/v1/books';
        var data = {
            name: book_name,
            description: book_description
        };
        axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
            // other configuration there
        })
            .then(function (response) {
                alert(`Thêm mới sách ${book_name} thành công!`)
                return false;
            })
            .catch(function (error) {
                if (error.response.data['code'] == 409)
                    alert(`Sách ${book_name} đã tồn tại trong hệ thống`);
                else
                    alert(`Xảy ra lỗi khi thêm mới sách ${book_name}!`);
                return false;
            });
    })
});