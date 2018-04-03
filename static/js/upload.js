$(document).ready(function () {
    // Request ajax get all category
    let getCategoryUrl = '/api/v1/flash_card_category'
    axios.get(getCategoryUrl)
        .then(function (response) {
            // Append category
            var s = document.getElementById('flashcard_category');
            if (response.data.data) {
                response.data.data.forEach((item) => {
                    s.options[s.options.length] = new Option(item['name'], item['id']);
                })
            }
            return false;
        })
        .catch(function (error) {
            return false;
        });

    var albumBucketName = 'hanaspeak/thanhtt';

    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:10fe5e60-da95-454f-9034-be4c73b70b6f',
    });

    var s3 = new AWS.S3({
        apiVersion: '2018-04-02',
        params: { Bucket: albumBucketName }
    });

    // upload audio
    $('#btn-upload-audio').bind('click', function () {
        process_upload($(this), '#audio-vocabulary', "#audio-s3-key", "#upload-audio-err-msg", s3)
    })
    // delete audio
    $('#btn-delete-audio').bind('click', function () {
        let s3_key = $('#audio-s3-key').text().trim();
        if (s3_key)
            return process_delete($(this), s3_key, s3, "#audio-s3-key");
        return false;
    })

    // upload image
    $('#btn-upload-image').bind('click', function () {
        process_upload($(this), '#image-vocabulary', "#image-s3-key", "#upload-image-err-msg", s3)
    })
    // delete image
    $('#btn-delete-image').bind('click', function () {
        let s3_key = $('#image-s3-key').text().trim();
        if (s3_key)
            return process_delete($(this), s3_key, s3, '#image-s3-key');
        return false;
    })
    // upload video
    $('#btn-upload-video').bind('click', function () {
        process_upload($(this), '#video-vocabulary', "#video-s3-key", "#upload-video-err-msg", s3)
    })
    // delete video
    $('#btn-delete-video').bind('click', function () {
        let s3_key = $('#video-s3-key').text().trim();
        if (s3_key)
            process_delete($(this), s3_key, s3, '#video-s3-key');
        return false;
    })


    // Process submit upload data
    $('#submit-data').bind('click', function () {
        // Get form data
        let vocab_name = $('#name-vocabulary').val().trim(),
            vocab_translate = $('#translate-vocabulary').val().trim(),
            vocab_audio_s3_link = $('#audio-s3-key').text().trim(),
            vocab_image_s3_link = $('#image-s3-key').text().trim(),
            vocab_video_s3_link = $('#video-s3-key').text().trim(),
            vocab_description = $('#description-vocabulary').val().trim(),
            vocab_category = $('#flashcard_category').val().trim();
        if (!vocab_name || !vocab_translate)
            return alert("Bạn phải nhập dữ liệu của tên và dịch từ vựng");
        if (!vocab_category)
            return alert("Bạn phải chọn chủ đề cho từ vựng");
        // Call axios send data
        let url = '/api/v1/flash_cards';
        var data = {
            name: vocab_name,
            translate: vocab_translate,
            audio: vocab_audio_s3_link,
            image: vocab_image_s3_link,
            video: vocab_video_s3_link,
            description: vocab_description,
            category_id: parseInt(vocab_category)
        };
        axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
            // other configuration there
        })
            .then(function (response) {
                alert(`Thêm mới từ vựng ${vocab_name} thành công!`)
                return false;
            })
            .catch(function (error) {
                if (error.response.data['code'] == 409)
                    alert(`Từ vựng ${vocab_name} đã tồn tại trong hệ thống`);
                else
                    alert(`Xảy ra lỗi khi thêm mới từ vựng ${vocab_name}!`);
                return false;
            });
    })
});
function process_upload(button, file_element_id, label_s3_key_id, label_error_msg_id, s3) {
    let d = new Date();
    let prev_key_name = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}-${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`
    let file = $(file_element_id).prop('files')[0];
    if (!file) {
        $(label_error_msg_id).text("Vui lòng chọn file để upload");
        return false;
    }
    $(label_error_msg_id).text("");
    let params = {
        Key: `${prev_key_name}_${file.name}`,
        Body: file,
        ACL: 'public-read'
    }
    button.button('loading');
    s3.upload(params, function (err, data) {
        // console.log(err, data);
        button.button('reset');
        $(label_s3_key_id).text(`${prev_key_name}_${file.name}`);
    });
}
function process_delete(button, s3_key, s3, label_s3_key_id) {
    button.button('loading');
    // s3_key = '2018-4-3-13-23-24_Screenshot from 2017-03-13 22-16-23.png';
    s3.deleteObject({ Key: s3_key }, function (err, data) {
        button.button('reset');
        if (err) {
            return alert('Delete error: ', err.message);
        }
        $(label_s3_key_id).text("");
        return alert('Delete success');
    });
}