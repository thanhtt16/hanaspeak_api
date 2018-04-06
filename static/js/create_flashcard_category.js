$(document).ready(function () {
    // Process submit upload data
    $('#submit-data').bind('click', function () {
        // Get form data
        let category_name = $('#name-category').val().trim(),
            category_description = $('#description-category').val().trim();
        if (!category_name)
            return alert("Bạn phải nhập tên danh mục");
        // Call axios send data
        let url = '/api/v1/flash_card_category';
        var data = {
            name: category_name,
            description: category_description
        };
        axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
            // other configuration there
        })
            .then(function (response) {
                alert(`Thêm mới danh mục ${category_name} thành công!`)
                return false;
            })
            .catch(function (error) {
                if (error.response.data['code'] == 409)
                    alert(`Danh mục ${category_name} đã tồn tại trong hệ thống`);
                else
                    alert(`Xảy ra lỗi khi thêm mới danh mục ${category_name}!`);
                return false;
            });
    })
});