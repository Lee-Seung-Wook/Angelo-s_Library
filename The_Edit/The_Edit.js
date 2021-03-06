// Full Bt img
var Full = "./image/Full_Heart.png";

// Empty Bt img
var Empty = "./image/Empty_Heart.png";

// Audio fifle var
var audio = new Audio("./sound/Mouse-Click-00-c-FesliyanStudios.com.mp3");

// Audio2 fifle var
var audio2 = new Audio("./sound/menu-sfx--select---8-sound-effect-69717408.mp3");

// Move Page To Main Function
function MovePageToMain() {
    $('#Restart').addClass('icon-spin3-alt animate-spin');
    setTimeout(function () {
        window.location.replace("./The_Edit.html");
    }, 1500);
}

// Move Page To Other Characters Function
function MovePageToOtherCharacters() {
    setTimeout(function () {
        window.location.replace("./Dictionary.html");
    }, 1000);
}

// Copy Current URL to Clipboard
function CopyUrlToClipboard() {
    var Dummy_Tag = document.createElement("input");
    var Current_URL = location.href;
    document.body.appendChild(Dummy_Tag);
    Dummy_Tag.value = Current_URL;
    Dummy_Tag.select();
    document.execCommand("copy");
    document.body.removeChild(Dummy_Tag);
    alert("웹사이트 주소가 복사되었습니다.\nThe website address has been copied.");
}

// Start Number
var StartNumber = 0;

// Array Number
var number = 0;

// Current Page Number
CurrentPage = 0;

// Question Array
var array = [];
array[0] = {
    "Question1": "편안하고 효율적인 삶은 귀찮음에서의 해방에서 시작된다고 생각한다.", "BtBt1_1": "1_1_1", "BtBt2_1": "1_1_1", "BtBt3_1": "1_1_1", "BtBt4_1": "1_1_1", "BtBt5_1": "1_1_1",
    "Question2": "직접 식재료를 손질하고 정리하는 것 보다 손질된 식재료를 구매하는 게 더 좋다.", "BtBt1_2": "1_1_2", "BtBt2_2": "1_1_2", "BtBt3_2": "1_1_2", "BtBt4_2": "1_1_2", "BtBt5_2": "1_1_2",
    "Question3": "일부 집안일에서 벗어날 수 있다면 일정량의 비용을 지불해도 괜찮다고 생각한다.", "BtBt1_3": "1_1_3", "BtBt2_3": "1_1_3", "BtBt3_3": "1_1_3", "BtBt4_3": "1_1_3", "BtBt5_3": "1_1_3",
    "Question4": "거리가 조금 멀더라도 저렴하고 소량구매가 가능한 재래시장보다 대형마트를 선호한다.", "BtBt1_4": "1_1_4", "BtBt2_4": "1_1_4", "BtBt3_4": "1_1_4", "BtBt4_4": "1_1_4", "BtBt5_4": "1_1_4",
    "Question5": "평소 일회용품 사용을 줄이기 위해 노력하나 일부 청소용품이나 생활용품은 어쩔 수 없다고 생각한다.", "BtBt1_5": "1_1_5", "BtBt2_5": "1_1_5", "BtBt3_5": "1_1_5", "BtBt4_5": "1_1_5", "BtBt5_5": "1_1_5"
},
    array[1] = {
        "Question1": "사회적 기업에 대한 관심이 높으며 해당기업의 제품이나 서비스에 호감을 갖게 된다.", "BtBt1_1": "1_2_1", "BtBt2_1": "1_2_1", "BtBt3_1": "1_2_1", "BtBt4_1": "1_2_1", "BtBt5_1": "1_2_1",
        "Question2": "작은 소비라도 무언가를 충분히 바꿀 수 있다고 생각한다.", "BtBt1_2": "1_2_2", "BtBt2_2": "1_2_2", "BtBt3_2": "1_2_2", "BtBt4_2": "1_2_2", "BtBt5_2": "1_2_2",
        "Question3": "특정 소비를 통해 긍정적인 메시지를 전달할 수 있다면 추가비용을 감내할 마음이 있다.", "BtBt1_3": "1_2_3", "BtBt2_3": "1_2_3", "BtBt3_3": "1_2_3", "BtBt4_3": "1_2_3", "BtBt5_3": "1_2_3",
        "Question4": "지금 당장의 불편함보다 더 중요한 게 있다고 생각한다.", "BtBt1_4": "1_2_4", "BtBt2_4": "1_2_4", "BtBt3_4": "1_2_4", "BtBt4_4": "1_2_4", "BtBt5_4": "1_2_4",
        "Question5": "이윤추구에만 집중하는 기업은 롱런하기 힘들다고 생각한다.", "BtBt1_5": "1_2_5", "BtBt2_5": "1_2_5", "BtBt3_5": "1_2_5", "BtBt4_5": "1_2_5", "BtBt5_5": "1_2_5"
    },
    array[2] = {
        "Question1": "현재 유행하고 있는 패션이나 이슈 등을 잘 알고 있다고 생각한다.", "BtBt1_1": "1_3_1", "BtBt2_1": "1_3_1", "BtBt3_1": "1_3_1", "BtBt4_1": "1_3_1", "BtBt5_1": "1_3_1",
        "Question2": "옷이나 신발 등을 구매하기 전에 최신 트렌드에 대해 알아본다.", "BtBt1_2": "1_3_2", "BtBt2_2": "1_3_2", "BtBt3_2": "1_3_2", "BtBt4_2": "1_3_2", "BtBt5_2": "1_3_2",
        "Question3": "오래전에 유행했던 제품들이 집안 곳곳을 장식하고 있다.", "BtBt1_3": "1_3_3", "BtBt2_3": "1_3_3", "BtBt3_3": "1_3_3", "BtBt4_3": "1_3_3", "BtBt5_3": "1_3_3",
        "Question4": "유행에 뒤떨어지지 않도록 별도의 노력을 기울이고 있다.", "BtBt1_4": "1_3_4", "BtBt2_4": "1_3_4", "BtBt3_4": "1_3_4", "BtBt4_4": "1_3_4", "BtBt5_4": "1_3_4",
        "Question5": "평소 듣는 음악 플레이리스트에 최신곡이 포함되어있다.", "BtBt1_5": "1_3_5", "BtBt2_5": "1_3_5", "BtBt3_5": "1_3_5", "BtBt4_5": "1_3_5", "BtBt5_5": "1_3_5"
    },
    array[3] = {
        "Question1": "유행을 따라 하기보다는 스스로의 가치와 색을 표현한다.", "BtBt1_1": "1_4_1", "BtBt2_1": "1_4_1", "BtBt3_1": "1_4_1", "BtBt4_1": "1_4_1", "BtBt5_1": "1_4_1",
        "Question2": "평소 궁금증이 많으며 새로운 것에 대한 거부감이 적다.", "BtBt1_2": "1_4_2", "BtBt2_2": "1_4_2", "BtBt3_2": "1_4_2", "BtBt4_2": "1_4_2", "BtBt5_2": "1_4_2",
        "Question3": "정해져있거나 얽매여 있는 걸 싫어하고 색다른 방법을 찾는 걸 좋아한다.", "BtBt1_3": "1_4_3", "BtBt2_3": "1_4_3", "BtBt3_3": "1_4_3", "BtBt4_3": "1_4_3", "BtBt5_3": "1_4_3",
        "Question4": "간혹 지인들이 나누는 가십거리에 참여하지 못하거나 흥미를 느끼지 못할 때가 있다.", "BtBt1_4": "1_4_4", "BtBt2_4": "1_4_4", "BtBt3_4": "1_4_4", "BtBt4_4": "1_4_4", "BtBt5_4": "1_4_4",
        "Question5": "평소 듣는 음악 플레이리스트에 나만의 애창곡이 많이 포함되어 있다.", "BtBt1_5": "1_4_5", "BtBt2_5": "1_4_5", "BtBt3_5": "1_4_5", "BtBt4_5": "1_4_5", "BtBt5_5": "1_4_5"
    },
    array[4] = {
        "Question1": "브랜드의 가치를 무시하는 사람들을 보면 답답한 생각이 든다.", "BtBt1_1": "1_5_1", "BtBt2_1": "1_5_1", "BtBt3_1": "1_5_1", "BtBt4_1": "1_5_1", "BtBt5_1": "1_5_1",
        "Question2": "스스로 브랜드에 대한 이해도가 높다고 생각한다.", "BtBt1_2": "1_5_2", "BtBt2_2": "1_5_2", "BtBt3_2": "1_5_2", "BtBt4_2": "1_5_2", "BtBt5_2": "1_5_2",
        "Question3": "감성품질역시 중요한 부분이라고 생각한다.", "BtBt1_3": "1_5_3", "BtBt2_3": "1_5_3", "BtBt3_3": "1_5_3", "BtBt4_3": "1_5_3", "BtBt5_3": "1_5_3",
        "Question4": "브랜드는 스스로 보증하는 가치가 있다고 생각한다.", "BtBt1_4": "1_5_4", "BtBt2_4": "1_5_4", "BtBt3_4": "1_5_4", "BtBt4_4": "1_5_4", "BtBt5_4": "1_5_4",
        "Question5": "같은 값이 아니라도 가끔은 다홍치마를 선택할 수 있다고 생각한다.", "BtBt1_5": "1_5_5", "BtBt2_5": "1_5_5", "BtBt3_5": "1_5_5", "BtBt4_5": "1_5_5", "BtBt5_5": "1_5_5"
    },
    array[5] = {
        "Question1": "가구나 집기 등을 알아보고 구입할 때 선호하는 디자인 또는 색상 등이 있다.", "BtBt1_1": "1_6_1", "BtBt2_1": "1_6_1", "BtBt3_1": "1_6_1", "BtBt4_1": "1_6_1", "BtBt5_1": "1_6_1",
        "Question2": "자신의 공간을 꾸미는 것은 즐겁고 행복한 일이다.", "BtBt1_2": "1_6_2", "BtBt2_2": "1_6_2", "BtBt3_2": "1_6_2", "BtBt4_2": "1_6_2", "BtBt5_2": "1_6_2",
        "Question3": "집 인테리어나 그릇, 기타 집기등과 관련된 이미지 또는 글 등을 종종 저장한다.", "BtBt1_3": "1_6_3", "BtBt2_3": "1_6_3", "BtBt3_3": "1_6_3", "BtBt4_3": "1_6_3", "BtBt5_3": "1_6_3",
        "Question4": "영화나 소설 등을 보며 주인공과 같은 일상의 경험을 해보고 싶다는 생각을 한적 있다.", "BtBt1_4": "1_6_4", "BtBt2_4": "1_6_4", "BtBt3_4": "1_6_4", "BtBt4_4": "1_6_4", "BtBt5_4": "1_6_4",
        "Question5": "다소 불편하고 가격이 높더라도 해당 가구나 집기가 놓여있는 모습 또는 사용하는 모습을 상상하며 구입을 고집한 적이 있다.", "BtBt1_5": "1_6_5", "BtBt2_5": "1_6_5", "BtBt3_5": "1_6_5", "BtBt4_5": "1_6_5", "BtBt5_5": "1_6_5"
    },
    array[6] = {
        "Question1": "불편함을 즉시 해소할 수 있음에도 절약 또는 신중함을 택하는 건 답답한 일이다.", "BtBt1_1": "1_7_1", "BtBt2_1": "1_7_1", "BtBt3_1": "1_7_1", "BtBt4_1": "1_7_1", "BtBt5_1": "1_7_1",
        "Question2": "무언가에 마음을 빼앗겼다면 예산을 초과하더라도 구입을 고집한 적이 있다.", "BtBt1_2": "1_7_2", "BtBt2_2": "1_7_2", "BtBt3_2": "1_7_2", "BtBt4_2": "1_7_2", "BtBt5_2": "1_7_2",
        "Question3": "모임에서 골든 벨을 울리는 경우가 잦으며, 다음날 후회한 적이 왕왕 있다.", "BtBt1_3": "1_7_3", "BtBt2_3": "1_7_3", "BtBt3_3": "1_7_3", "BtBt4_3": "1_7_3", "BtBt5_3": "1_7_3",
        "Question4": "현재 사용하고 있는 가구나 집기 등에서 후회나 아쉬운 감정을 느끼는 경우가 있다.", "BtBt1_4": "1_7_4", "BtBt2_4": "1_7_4", "BtBt3_4": "1_7_4", "BtBt4_4": "1_7_4", "BtBt5_4": "1_7_4",
        "Question5": "우물쭈물하며 선택장애를 보이는 사람이 답답한 적이 있다.", "BtBt1_5": "1_7_5", "BtBt2_5": "1_7_5", "BtBt3_5": "1_7_5", "BtBt4_5": "1_7_5", "BtBt5_5": "1_7_5"
    },
    array[7] = {
        "Question1": "온라인상에서 장바구니가 터질 만큼 물건을 담아놓지만 실제로 구매와 이어지는 경우는 드물다.", "BtBt1_1": "1_8_1", "BtBt2_1": "1_8_1", "BtBt3_1": "1_8_1", "BtBt4_1": "1_8_1", "BtBt5_1": "1_8_1",
        "Question2": "구매를 결정하기 전 반드시 사용자 리뷰나 블로그 리뷰 등을 찾아보는 편이다.", "BtBt1_2": "1_8_2", "BtBt2_2": "1_8_2", "BtBt3_2": "1_8_2", "BtBt4_2": "1_8_2", "BtBt5_2": "1_8_2",
        "Question3": "쇼핑을 생각하면 즐거움과 설렘보다는 번거로움이 먼저 떠오른다.", "BtBt1_3": "1_8_3", "BtBt2_3": "1_8_3", "BtBt3_3": "1_8_3", "BtBt4_3": "1_8_3", "BtBt5_3": "1_8_3",
        "Question4": "결제버튼을 누르기 전에 다시 한 번 상품을 훑어보고 재확인 하는 경우가 있다.", "BtBt1_4": "1_8_4", "BtBt2_4": "1_8_4", "BtBt3_4": "1_8_4", "BtBt4_4": "1_8_4", "BtBt5_4": "1_8_4",
        "Question5": "물건을 구매할 때 해당 후보군을 찾아 정리하고 비교하는 경우가 있다.", "BtBt1_5": "1_8_5", "BtBt2_5": "1_8_5", "BtBt3_5": "1_8_5", "BtBt4_5": "1_8_5", "BtBt5_5": "1_8_5"
    },
    array[8] = {
        "Question1": "쿠폰과 이벤트, 세일기간 알림 등을 위해 해당 브랜드의 카카오톡 채널을 등록해 놓는다.", "BtBt1_1": "1_9_1", "BtBt2_1": "1_9_1", "BtBt3_1": "1_9_1", "BtBt4_1": "1_9_1", "BtBt5_1": "1_9_1",
        "Question2": "물건을 구입할 때 다양한 쇼핑몰에서 동일한 제품을 검색하고 가격과 쿠폰, 배송비, 적립금 등을 고려한다.", "BtBt1_2": "1_9_2", "BtBt2_2": "1_9_2", "BtBt3_2": "1_9_2", "BtBt4_2": "1_9_2", "BtBt5_2": "1_9_2",
        "Question3": "해외직구를 자주 이용하며 종종 지인들에게 직구의 장점을 설명하기도 한다.", "BtBt1_3": "1_9_3", "BtBt2_3": "1_9_3", "BtBt3_3": "1_9_3", "BtBt4_3": "1_9_3", "BtBt5_3": "1_9_3",
        "Question4": "설치, 조립비용 등의 절감을 위해 스스로 관련정보를 알아보거나 도전해 본적이 있다.", "BtBt1_4": "1_9_4", "BtBt2_4": "1_9_4", "BtBt3_4": "1_9_4", "BtBt4_4": "1_9_4", "BtBt5_4": "1_9_4",
        "Question5": "무이자할부, 신용, 체크카드 혜택, 통신사 할인 등과 같은 서비스를 적극 활용한다.", "BtBt1_5": "1_9_5", "BtBt2_5": "1_9_5", "BtBt3_5": "1_9_5", "BtBt4_5": "1_9_5", "BtBt5_5": "1_9_5"
    },
    array[9] = {
        "Question1": "새로운 기능에 대한 정보를 접하면 해당 기능의 대한 궁금증이 뿜어져 나온다.", "BtBt1_1": "1_10_1", "BtBt2_1": "1_10_1", "BtBt3_1": "1_10_1", "BtBt4_1": "1_10_1", "BtBt5_1": "1_10_1",
        "Question2": "최적의 구매 시기를 고집하는 사람은 절대로 신제품을 구입할 수 없다는 말에 공감한다.", "BtBt1_2": "1_10_2", "BtBt2_2": "1_10_2", "BtBt3_2": "1_10_2", "BtBt4_2": "1_10_2", "BtBt5_2": "1_10_2",
        "Question3": "새로운 경험을 위해 소비된 비용은 과소비라고 할 수 없다.", "BtBt1_3": "1_10_3", "BtBt2_3": "1_10_3", "BtBt3_3": "1_10_3", "BtBt4_3": "1_10_3", "BtBt5_3": "1_10_3",
        "Question4": "주변사람들보다 새로움에 늦게 반응하는 건 불쾌한 일이다.", "BtBt1_4": "1_10_4", "BtBt2_4": "1_10_4", "BtBt3_4": "1_10_4", "BtBt4_4": "1_10_4", "BtBt5_4": "1_10_4",
        "Question5": "가능하다면 기다림을 통해서라도 새로운 제품을 먼저 받아보고 싶다.", "BtBt1_5": "1_10_5", "BtBt2_5": "1_10_5", "BtBt3_5": "1_10_5", "BtBt4_5": "1_10_5", "BtBt5_5": "1_10_5"
    }

// First Page FadeOut
$(document).ready(function () {
    function isMobile() {
        var UserAgent = navigator.userAgent;
        if (UserAgent.match(/iPhone|iPod|iPad|iPad Pro|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
            return true;
        } else {
            return false;
        }
    }
    if (StartNumber == 0) {
        setTimeout(function () {
            if (isMobile()) {
                $('.First_Page').fadeOut(500);
                $('.Second_Page').fadeIn(500);
            } else {
                alert("모바일 환경에 최적화 되어 있습니다. 아래 QR코드를 통해 모바일로 접속해주세요.")
            }
        }, 1500);
        StartNumber++;
        window.scrollTo(0, 0);
    }
})

// Second Page FadeOut + Insert Question
$('#Start_Bt').click(function () {
    if (StartNumber == 1) {
        audio.loop = false;
        audio.volume = 1;
        audio.play();
        setTimeout(function () {
            $('#Start_Bt').css('color', 'rgb(78, 217, 102)');
            $('#Start_Bt').html("&#xF205");
        }, 50)
        setTimeout(function () {
            $('.Second_Page').fadeOut(500);
            $('.Third_Page').fadeIn(500);
        }, 500);
        CurrentPage++
        array = array.filter(item => item);
        var TotalPage = array.length;
        $('.CurrentPage_TotalPage').html('<p>' + CurrentPage + "/" + TotalPage + '</p>');
        // Question <P> Insert through the array
        $("#Question1").html(array[number]["Question1"]);
        $("#Question2").html(array[number]["Question2"]);
        $("#Question3").html(array[number]["Question3"]);
        $("#Question4").html(array[number]["Question4"]);
        $("#Question5").html(array[number]["Question5"]);
        // Question <First Button> Insert through the array
        $('#BtBt1_1').val(array[number]["BtBt1_1"]);
        $('#BtBt2_1').val(array[number]["BtBt2_1"]);
        $('#BtBt3_1').val(array[number]["BtBt3_1"]);
        $('#BtBt4_1').val(array[number]["BtBt4_1"]);
        $('#BtBt5_1').val(array[number]["BtBt5_1"]);
        // Question <Second Button> Insert through the array
        $('#BtBt1_2').val(array[number]["BtBt1_2"]);
        $('#BtBt2_2').val(array[number]["BtBt2_2"]);
        $('#BtBt3_2').val(array[number]["BtBt3_2"]);
        $('#BtBt4_2').val(array[number]["BtBt4_2"]);
        $('#BtBt5_2').val(array[number]["BtBt5_2"]);
        // Question <Third Button> Insert through the array
        $('#BtBt1_3').val(array[number]["BtBt1_3"]);
        $('#BtBt2_3').val(array[number]["BtBt2_3"]);
        $('#BtBt3_3').val(array[number]["BtBt3_3"]);
        $('#BtBt4_3').val(array[number]["BtBt4_3"]);
        $('#BtBt5_3').val(array[number]["BtBt5_3"]);
        // Question <Fourth Button> Insert through the array
        $('#BtBt1_4').val(array[number]["BtBt1_4"]);
        $('#BtBt2_4').val(array[number]["BtBt2_4"]);
        $('#BtBt3_4').val(array[number]["BtBt3_4"]);
        $('#BtBt4_4').val(array[number]["BtBt4_4"]);
        $('#BtBt5_4').val(array[number]["BtBt5_4"]);
        // Question <Fifth Button> Insert through the array
        $('#BtBt1_5').val(array[number]["BtBt1_5"]);
        $('#BtBt2_5').val(array[number]["BtBt2_5"]);
        $('#BtBt3_5').val(array[number]["BtBt3_5"]);
        $('#BtBt4_5').val(array[number]["BtBt4_5"]);
        $('#BtBt5_5').val(array[number]["BtBt5_5"]);
        // Question Button Reset
        $('#BtBt1_1>img').attr('src', Empty);
        $('#BtBt2_1>img').attr('src', Empty);
        $('#BtBt3_1>img').attr('src', Empty);
        $('#BtBt4_1>img').attr('src', Empty);
        $('#BtBt5_1>img').attr('src', Empty);
        $('#BtBt1_2>img').attr('src', Empty);
        $('#BtBt2_2>img').attr('src', Empty);
        $('#BtBt3_2>img').attr('src', Empty);
        $('#BtBt4_2>img').attr('src', Empty);
        $('#BtBt5_2>img').attr('src', Empty);
        $('#BtBt1_3>img').attr('src', Empty);
        $('#BtBt2_3>img').attr('src', Empty);
        $('#BtBt3_3>img').attr('src', Empty);
        $('#BtBt4_3>img').attr('src', Empty);
        $('#BtBt5_3>img').attr('src', Empty);
        $('#BtBt1_4>img').attr('src', Empty);
        $('#BtBt2_4>img').attr('src', Empty);
        $('#BtBt3_4>img').attr('src', Empty);
        $('#BtBt4_4>img').attr('src', Empty);
        $('#BtBt5_4>img').attr('src', Empty);
        $('#BtBt1_5>img').attr('src', Empty);
        $('#BtBt2_5>img').attr('src', Empty);
        $('#BtBt3_5>img').attr('src', Empty);
        $('#BtBt4_5>img').attr('src', Empty);
        $('#BtBt5_5>img').attr('src', Empty);
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 1000)
    }
})

// Inset the value of arrayy in third page [Second]
function NextStep() {
    setTimeout(function () {
        audio2.loop = false;
        audio2.volume = 0.2;
        audio2.play();
        $('#span').addClass('icon-spin6-alt animate-spin');
    }, 100);
    setTimeout(function () {
        Sum();
        window.scrollTo(0, 0);
        number++;
        array = array.filter(item => item);
        var TotalPage = array.length;
        if (number >= TotalPage) {
            $('.Third_Page').fadeOut(500);
            $('.Fourth_Page').fadeIn(500);
            window.scrollTo(0, 0);
        } else {
            // Question <P> Insert through the array
            $("#Question1").html(array[number]["Question1"]);
            $("#Question2").html(array[number]["Question2"]);
            $("#Question3").html(array[number]["Question3"]);
            $("#Question4").html(array[number]["Question4"]);
            $("#Question5").html(array[number]["Question5"]);
            // Question <First Button> Insert through the array
            $('#BtBt1_1').val(array[number]["BtBt1_1"]);
            $('#BtBt2_1').val(array[number]["BtBt2_1"]);
            $('#BtBt3_1').val(array[number]["BtBt3_1"]);
            $('#BtBt4_1').val(array[number]["BtBt4_1"]);
            $('#BtBt5_1').val(array[number]["BtBt5_1"]);
            // Question <Second Button> Insert through the array
            $('#BtBt1_2').val(array[number]["BtBt1_2"]);
            $('#BtBt2_2').val(array[number]["BtBt2_2"]);
            $('#BtBt3_2').val(array[number]["BtBt3_2"]);
            $('#BtBt4_2').val(array[number]["BtBt4_2"]);
            $('#BtBt5_2').val(array[number]["BtBt5_2"]);
            // Question <Third Button> Insert through the array
            $('#BtBt1_3').val(array[number]["BtBt1_3"]);
            $('#BtBt2_3').val(array[number]["BtBt2_3"]);
            $('#BtBt3_3').val(array[number]["BtBt3_3"]);
            $('#BtBt4_3').val(array[number]["BtBt4_3"]);
            $('#BtBt5_3').val(array[number]["BtBt5_3"]);
            // Question <Fourth Button> Insert through the array
            $('#BtBt1_4').val(array[number]["BtBt1_4"]);
            $('#BtBt2_4').val(array[number]["BtBt2_4"]);
            $('#BtBt3_4').val(array[number]["BtBt3_4"]);
            $('#BtBt4_4').val(array[number]["BtBt4_4"]);
            $('#BtBt5_4').val(array[number]["BtBt5_4"]);
            // Question <Fifth Button> Insert through the array
            $('#BtBt1_5').val(array[number]["BtBt1_5"]);
            $('#BtBt2_5').val(array[number]["BtBt2_5"]);
            $('#BtBt3_5').val(array[number]["BtBt3_5"]);
            $('#BtBt4_5').val(array[number]["BtBt4_5"]);
            $('#BtBt5_5').val(array[number]["BtBt5_5"]);
            // Question Button Reset
            $('#BtBt1_1>img').attr('src', Empty);
            $('#BtBt2_1>img').attr('src', Empty);
            $('#BtBt3_1>img').attr('src', Empty);
            $('#BtBt4_1>img').attr('src', Empty);
            $('#BtBt5_1>img').attr('src', Empty);
            $('#BtBt1_2>img').attr('src', Empty);
            $('#BtBt2_2>img').attr('src', Empty);
            $('#BtBt3_2>img').attr('src', Empty);
            $('#BtBt4_2>img').attr('src', Empty);
            $('#BtBt5_2>img').attr('src', Empty);
            $('#BtBt1_3>img').attr('src', Empty);
            $('#BtBt2_3>img').attr('src', Empty);
            $('#BtBt3_3>img').attr('src', Empty);
            $('#BtBt4_3>img').attr('src', Empty);
            $('#BtBt5_3>img').attr('src', Empty);
            $('#BtBt1_4>img').attr('src', Empty);
            $('#BtBt2_4>img').attr('src', Empty);
            $('#BtBt3_4>img').attr('src', Empty);
            $('#BtBt4_4>img').attr('src', Empty);
            $('#BtBt5_4>img').attr('src', Empty);
            $('#BtBt1_5>img').attr('src', Empty);
            $('#BtBt2_5>img').attr('src', Empty);
            $('#BtBt3_5>img').attr('src', Empty);
            $('#BtBt4_5>img').attr('src', Empty);
            $('#BtBt5_5>img').attr('src', Empty);
            // Next Step Button Reset
            $('#span').removeClass();
            CurrentPage++;
            array = array.filter(item => item);
            var TotalPage = array.length;
            $('.CurrentPage_TotalPage').html('<p>' + CurrentPage + "/" + TotalPage + '</p>')
        }
    }, 1500);
}

// For Value Sum
function Sum() {
    if ($('#BtBt1_1').val() == "1_1_1") {
        var Second_Value1 = $('.1_1_1').val();
        var Second_Value2 = $('.1_1_2').val();
        var Second_Value3 = $('.1_1_3').val();
        var Second_Value4 = $('.1_1_4').val();
        var Second_Value5 = $('.1_1_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_1_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1_1').val() == "1_2_1") {
        var Second_Value1 = $('.1_2_1').val();
        var Second_Value2 = $('.1_2_2').val();
        var Second_Value3 = $('.1_2_3').val();
        var Second_Value4 = $('.1_2_4').val();
        var Second_Value5 = $('.1_2_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_2_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1_1').val() == "1_3_1") {
        var Second_Value1 = $('.1_3_1').val();
        var Second_Value2 = $('.1_3_2').val();
        var Second_Value3 = $('.1_3_3').val();
        var Second_Value4 = $('.1_3_4').val();
        var Second_Value5 = $('.1_3_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_3_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1_1').val() == "1_4_1") {
        var Second_Value1 = $('.1_4_1').val();
        var Second_Value2 = $('.1_4_2').val();
        var Second_Value3 = $('.1_4_3').val();
        var Second_Value4 = $('.1_4_4').val();
        var Second_Value5 = $('.1_4_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_4_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1_1').val() == "1_5_1") {
        var Second_Value1 = $('.1_5_1').val();
        var Second_Value2 = $('.1_5_2').val();
        var Second_Value3 = $('.1_5_3').val();
        var Second_Value4 = $('.1_5_4').val();
        var Second_Value5 = $('.1_5_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_5_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1_1').val() == "1_6_1") {
        var Second_Value1 = $('.1_6_1').val();
        var Second_Value2 = $('.1_6_2').val();
        var Second_Value3 = $('.1_6_3').val();
        var Second_Value4 = $('.1_6_4').val();
        var Second_Value5 = $('.1_6_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_6_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1_1').val() == "1_7_1") {
        var Second_Value1 = $('.1_7_1').val();
        var Second_Value2 = $('.1_7_2').val();
        var Second_Value3 = $('.1_7_3').val();
        var Second_Value4 = $('.1_7_4').val();
        var Second_Value5 = $('.1_7_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_7_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1_1').val() == "1_8_1") {
        var Second_Value1 = $('.1_8_1').val();
        var Second_Value2 = $('.1_8_2').val();
        var Second_Value3 = $('.1_8_3').val();
        var Second_Value4 = $('.1_8_4').val();
        var Second_Value5 = $('.1_8_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_8_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1_1').val() == "1_9_1") {
        var Second_Value1 = $('.1_9_1').val();
        var Second_Value2 = $('.1_9_2').val();
        var Second_Value3 = $('.1_9_3').val();
        var Second_Value4 = $('.1_9_4').val();
        var Second_Value5 = $('.1_9_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_9_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1_1').val() == "1_10_1") {
        var Second_Value1 = $('.1_10_1').val();
        var Second_Value2 = $('.1_10_2').val();
        var Second_Value3 = $('.1_10_3').val();
        var Second_Value4 = $('.1_10_4').val();
        var Second_Value5 = $('.1_10_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_10_6').attr('value', Second_Value_Sum);
    }
}

// Question Button 1_1 Function
$('#BtBt1_1').click(function () {
    var type = $('#BtBt1_1').val();
    $("." + type).val(0);
    $('#BtBt1_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_1>img').attr('src', Empty);
    $('#BtBt3_1>img').attr('src', Empty);
    $('#BtBt4_1>img').attr('src', Empty);
    $('#BtBt5_1>img').attr('src', Empty);
    var offset = $('#BtBt1_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 2_1 Function
$('#BtBt2_1').click(function () {
    var type = $('#BtBt2_1').val();
    $("." + type).val(2);
    $('#BtBt1_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_1>img').attr('src', Empty);
    $('#BtBt4_1>img').attr('src', Empty);
    $('#BtBt5_1>img').attr('src', Empty);
    var offset = $('#BtBt2_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 3_1 Function
$('#BtBt3_1').click(function () {
    var type = $('#BtBt3_1').val();
    $("." + type).val(3);
    $('#BtBt1_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_1>img').attr('src', Empty);
    $('#BtBt5_1>img').attr('src', Empty);
    var offset = $('#BtBt3_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 4_1 Function
$('#BtBt4_1').click(function () {
    var type = $('#BtBt4_1').val();
    $("." + type).val(4);
    $('#BtBt1_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt5_1>img').attr('src', Empty);
    var offset = $('#BtBt4_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 5_1 Function
$('#BtBt5_1').click(function () {
    var type = $('#BtBt5_1').val();
    $("." + type).val(6);
    $('#BtBt1_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt5_1>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    var offset = $('#BtBt5_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 1_2 Function
$('#BtBt1_2').click(function () {
    var type = $('#BtBt1_2').val();
    $("." + type).val(0);
    $('#BtBt1_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_2>img').attr('src', Empty);
    $('#BtBt3_2>img').attr('src', Empty);
    $('#BtBt4_2>img').attr('src', Empty);
    $('#BtBt5_2>img').attr('src', Empty);
    var offset = $('#BtBt1_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 2_2 Function
$('#BtBt2_2').click(function () {
    var type = $('#BtBt2_2').val();
    $("." + type).val(2);
    $('#BtBt1_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_2>img').attr('src', Empty);
    $('#BtBt4_2>img').attr('src', Empty);
    $('#BtBt5_2>img').attr('src', Empty);
    var offset = $('#BtBt2_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 3_2 Function
$('#BtBt3_2').click(function () {
    var type = $('#BtBt3_2').val();
    $("." + type).val(3);
    $('#BtBt1_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_2>img').attr('src', Empty);
    $('#BtBt5_2>img').attr('src', Empty);
    var offset = $('#BtBt3_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 4_2 Function
$('#BtBt4_2').click(function () {
    var type = $('#BtBt4_2').val();
    $("." + type).val(4);
    $('#BtBt1_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt5_2>img').attr('src', Empty);
    var offset = $('#BtBt4_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 5_2 Function
$('#BtBt5_2').click(function () {
    var type = $('#BtBt5_2').val();
    $("." + type).val(6);
    $('#BtBt1_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt5_2>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    var offset = $('#BtBt5_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 1_3 Function
$('#BtBt1_3').click(function () {
    var type = $('#BtBt1_3').val();
    $("." + type).val(0);
    $('#BtBt1_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_3>img').attr('src', Empty);
    $('#BtBt3_3>img').attr('src', Empty);
    $('#BtBt4_3>img').attr('src', Empty);
    $('#BtBt5_3>img').attr('src', Empty);
    var offset = $('#BtBt1_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 2_3 Function
$('#BtBt2_3').click(function () {
    var type = $('#BtBt2_3').val();
    $("." + type).val(2);
    $('#BtBt1_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_3>img').attr('src', Empty);
    $('#BtBt4_3>img').attr('src', Empty);
    $('#BtBt5_3>img').attr('src', Empty);
    var offset = $('#BtBt2_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 3_3 Function
$('#BtBt3_3').click(function () {
    var type = $('#BtBt3_3').val();
    $("." + type).val(3);
    $('#BtBt1_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_3>img').attr('src', Empty);
    $('#BtBt5_3>img').attr('src', Empty);
    var offset = $('#BtBt3_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 4_3 Function
$('#BtBt4_3').click(function () {
    var type = $('#BtBt4_3').val();
    $("." + type).val(4);
    $('#BtBt1_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt5_3>img').attr('src', Empty);
    var offset = $('#BtBt4_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 5_3 Function
$('#BtBt5_3').click(function () {
    var type = $('#BtBt5_3').val();
    $("." + type).val(6);
    $('#BtBt1_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt5_3>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    var offset = $('#BtBt5_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 1_4 Function
$('#BtBt1_4').click(function () {
    var type = $('#BtBt1_4').val();
    $("." + type).val(0);
    $('#BtBt1_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_4>img').attr('src', Empty);
    $('#BtBt3_4>img').attr('src', Empty);
    $('#BtBt4_4>img').attr('src', Empty);
    $('#BtBt5_4>img').attr('src', Empty);
    var offset = $('#BtBt1_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 2_4 Function
$('#BtBt2_4').click(function () {
    var type = $('#BtBt2_4').val();
    $("." + type).val(2);
    $('#BtBt1_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_4>img').attr('src', Empty);
    $('#BtBt4_4>img').attr('src', Empty);
    $('#BtBt5_4>img').attr('src', Empty);
    var offset = $('#BtBt2_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 3_4 Function
$('#BtBt3_4').click(function () {
    var type = $('#BtBt3_4').val();
    $("." + type).val(3);
    $('#BtBt1_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_4>img').attr('src', Empty);
    $('#BtBt5_4>img').attr('src', Empty);
    var offset = $('#BtBt3_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 4_4 Function
$('#BtBt4_4').click(function () {
    var type = $('#BtBt4_4').val();
    $("." + type).val(4);
    $('#BtBt1_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt5_4>img').attr('src', Empty);
    var offset = $('#BtBt4_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 5_4 Function
$('#BtBt5_4').click(function () {
    var type = $('#BtBt5_4').val();
    $("." + type).val(6);
    $('#BtBt1_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt5_4>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    var offset = $('#BtBt5_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 1_5 Function
$('#BtBt1_5').click(function () {
    var type = $('#BtBt1_5').val();
    $("." + type).val(0);
    $('#BtBt1_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_5>img').attr('src', Empty);
    $('#BtBt3_5>img').attr('src', Empty);
    $('#BtBt4_5>img').attr('src', Empty);
    $('#BtBt5_5>img').attr('src', Empty);
    var offset = $('#BtBt1_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 2_5 Function
$('#BtBt2_5').click(function () {
    var type = $('#BtBt2_5').val();
    $("." + type).val(2);
    $('#BtBt1_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_5>img').attr('src', Empty);
    $('#BtBt4_5>img').attr('src', Empty);
    $('#BtBt5_5>img').attr('src', Empty);
    var offset = $('#BtBt2_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 3_5 Function
$('#BtBt3_5').click(function () {
    var type = $('#BtBt3_5').val();
    $("." + type).val(3);
    $('#BtBt1_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_5>img').attr('src', Empty);
    $('#BtBt5_5>img').attr('src', Empty);
    var offset = $('#BtBt3_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 4_5 Function
$('#BtBt4_5').click(function () {
    var type = $('#BtBt4_5').val();
    $("." + type).val(4);
    $('#BtBt1_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt5_5>img').attr('src', Empty);
    var offset = $('#BtBt4_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Question Button 5_5 Function
$('#BtBt5_5').click(function () {
    var type = $('#BtBt5_5').val();
    $("." + type).val(6);
    $('#BtBt1_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt2_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt3_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt4_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    $('#BtBt5_5>img').attr('src', Full).animate({ opacity: "0" }, 0).delay(100).animate({ opacity: "1" }, 250);
    var offset = $('#BtBt5_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

$('#Fourth_Page_Bt').click(function () {
    Result();
});

// For Calculate The Result value
function Result() {
    setTimeout(function () {
        audio2.loop = false;
        audio2.volume = 0.2;
        audio2.play();
        $('#Fourth_Page_Bt').addClass('icon-spin6-alt animate-spin');
    }, 100);
    setTimeout(function () {
        $('.Fourth_Page').fadeOut(500);
        $('.Fifth_Page').fadeIn(500);
        window.scrollTo(0, 0);
    }, 100);
    setTimeout(function () {
        var Array_1 = $('.1_1_6').val();
        var Array_2 = $('.1_2_6').val();
        var Array_3 = $('.1_3_6').val();
        var Array_4 = $('.1_4_6').val();
        var Array_5 = $('.1_5_6').val();
        var Array_6 = $('.1_6_6').val();
        var Array_7 = $('.1_7_6').val();
        var Array_8 = $('.1_8_6').val();
        var Array_9 = $('.1_9_6').val();
        var Array_10 = $('.1_10_6').val();
        var Result_Array = [
            Array_1 * 1, Array_2 * 1, Array_3 * 1, Array_4 * 1, Array_5 * 1, Array_6 * 1, Array_7 * 1, Array_8 * 1, Array_9 * 1, Array_10 * 1]
        var TopScore = Math.max.apply(null, Result_Array);
        if (Array_1 == Array_2 || Array_1 == Array_3 || Array_1 == Array_4 || Array_1 == Array_5 || Array_1 == Array_6 || Array_1 == Array_7 || Array_1 == Array_8 || Array_1 == Array_9 || Array_1 == Array_10) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_1 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_1_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_1) {
            $('.Fifth_Page_First_div').append("<div class=\"Fifth_Page_Title\"><p class=\"Fifth_Page_Title_Fontello\">&#xF0F4</p><p class=\"Fifth_Page_Title_Dscription\">&nbsp;당신은 재화나 서비스를 소비할 때 얻게 되는 본질적인 가치에 높은 점수를 부여합니다.</p></div><p class=\"Fifth_Page_Dscription\">&nbsp;편리함을 추구하는 당신은 일반적으로 기대되는 본질적 가치와 사용편의성에 의해 재구매를 결정하며, 불편하고 귀찮은 것으로부터 해방되는데 비용을 아끼지 않습니다.</p><p class=\"Fifth_Page_Dscription_2\">&nbsp;그렇기 때문에 생활편의 구독형 서비스를 이용하는데 거부감이 적으며, 절약하진 못하더라도 알토란같은 쇼핑을 하는 경우가 많습니다.</p>");
            $('#Editor>img').attr("src", "./image/1Editor_M.png");
            $('#Reco_Youtube>a').attr("href", "https://youtu.be/MmLyVZokhlw");
            $('#Reco_News>a').attr("href", "https://stibee.com/api/v1.0/emails/share/I-mpmS7yzgrFV3Thk7_NgeOwo_KyBw");
            $('#Fourth_Page_Bt').removeClass();
        } else if (Array_2 == Array_3 || Array_2 == Array_4 || Array_2 == Array_5 || Array_2 == Array_6 || Array_2 == Array_7 || Array_2 == Array_8 || Array_2 == Array_9 || Array_2 == Array_10) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_2 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_2_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_2) {
            $('.Fifth_Page_First_div').append("<div class=\"Fifth_Page_Title\"><p class=\"Fifth_Page_Title_Fontello\">&#xf1b8</p><p class=\"Fifth_Page_Title_Dscription\">&nbsp;당신은 재화나 서비스를 소비할 때 착한소비를 지향하며 이에 높은 점수를 부여합니다.</p></div><p class=\"Fifth_Page_Dscription\">&nbsp;이른바 착한소비를 지향하는 당신은 사소한 소비를 행할 때도 가급적 우리가 겪고 있는 사회문제를 해결하기 위한 작은 실천을 보이는 사람입니다. 일예로 환경을 생각한 Zero Waste 운동과 아동노동 착취금지 등을 위한 공정무역 등이 있습니다.</p><p class=\"Fifth_Page_Dscription_2\">&nbsp;사회문제를 좌시하지 않고 직접 행동하는 멋진 소비자이지만 간혹 착한소비를 위해 비합리적인 소비를 하는 게 아니냐는 비아냥거림을 들을 때가 있습니다.</p>");
            $('#Editor>img').attr("src", "./image/4YUNHEE_PD.png");
            $('#Reco_Youtube>a').attr("href", "https://youtu.be/AC_yAQ7R6VM");
            $('#Reco_News>a').attr("href", "https://stibee.com/api/v1.0/emails/share/9MB7XrZ3oSPzLR9RYM98gPF_miTYyA");
            $('#Fourth_Page_Bt').removeClass();
        } else if (Array_3 == Array_4 || Array_3 == Array_5 || Array_3 == Array_6 || Array_3 == Array_7 || Array_3 == Array_8 || Array_3 == Array_9 || Array_3 == Array_10) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_3 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_3_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_3) {
            $('.Fifth_Page_First_div').append("<div class=\"Fifth_Page_Title\"><p class=\"Fifth_Page_Title_Fontello\">&#xe801</p><p class=\"Fifth_Page_Title_Dscription\">&nbsp;당신은 재화나 서비스를 소비할 때 유행에 민감하게 반응하며 이에 높은 점수를 부여합니다.</p></div><p class=\"Fifth_Page_Dscription\">&nbsp;유행에 민감한 당신은 타인과 끊임없이 상호작용하며 “개인은 개인으로서만 존재하는 것이 아니라 사회 속에서 존재한다.”라는 말을 증명하는 부류입니다.</p><p class=\"Fifth_Page_Dscription_2\">&nbsp;일반적으로 유행문화에 대한 선망을 가지고 있으며 자신만의 색을 들어내기 보다는 안정적이고 무난한 선택을 선호합니다. 그로인해 만족스럽고 성공적인 소비를 하는 경우가 많지만 특색 없는 소비에 의한 매너리즘에 빠지거나 다이내믹한 유행에 따라 소비주기가 짧아져 과소비를 하게 되는 경우도 있습니다.</p>");
            $('#Editor>img').attr("src", "./image/1Editor_M.png");
            $('#Reco_Youtube>a').attr("href", "https://youtu.be/E7sXKJHoSQk");
            $('#Reco_News>a').attr("href", "https://stibee.com/api/v1.0/emails/share/iTyIVohYEC2R7QtN-1D1D0KrMQ-d5Q==");
            $('#Fourth_Page_Bt').removeClass();
        } else if (Array_4 == Array_5 || Array_4 == Array_6 || Array_4 == Array_7 || Array_4 == Array_8 || Array_4 == Array_9 || Array_4 == Array_10) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_4 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_4_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_4) {
            $('.Fifth_Page_First_div').append("<div class=\"Fifth_Page_Title\"><p class=\"Fifth_Page_Title_Fontello\">&#xe802</p><p class=\"Fifth_Page_Title_Dscription\">&nbsp;당신은 재화나 서비스를 소비할 때 자신만의 색을 드러내는데 두려움이 적으며 이에 높은 점수를 부여합니다.</p></div><p class=\"Fifth_Page_Dscription\">&nbsp;자신의 아름다움과 가치를 누구보다 잘 알고 있는 당신은 스스로를 정의하고 표현하는데 두려움이 없습니다. 또한 자신만의 가치를 반짝일 수 있다면 작금의 풍속에 일부 어긋나는 모습일지라도 자신 있게 도전합니다. 그렇기에 종종 괴짜라 불리며, 당신의 소비는 가십거리로 떠오르고 논란의 대상이 되기도 합니다.</p><p class=\"Fifth_Page_Dscription_2\">&nbsp;자신의 가치와 멋을 알아가는 길은 험난한 길이기에 당신은 일명 정신승리에 가까운 소비를 하며 주위의 비웃음과 조롱을 사기도 하지만 종종 운명적인 소비를 통해 자신의 가치를 뽐내기도 합니다.</p>");
            $('#Editor>img').attr("src", "./image/3Editor_B.png");
            $('#Reco_Youtube>a').attr("href", "https://youtu.be/SDOE5RlDF4I");
            $('#Reco_News>a').attr("href", "https://stibee.com/api/v1.0/emails/share/xPd6S_SDYnsU6OrvsCeQL5PMIzDxrg==");
            $('#Fourth_Page_Bt').removeClass();
        } else if (Array_5 == Array_6 || Array_5 == Array_7 || Array_5 == Array_8 || Array_5 == Array_9 || Array_5 == Array_10) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_5 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_5_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_5) {
            $('.Fifth_Page_First_div').append("<div class=\"Fifth_Page_Title\"><p class=\"Fifth_Page_Title_Fontello\">&#xe803</p><p class=\"Fifth_Page_Title_Dscription\">&nbsp;당신은 재화나 서비스를 소비할 때 브랜드에 대한 의존이 강하며 이에 높은 점수를 부여합니다.</p></div><p class=\"Fifth_Page_Dscription\">&nbsp;브랜드가 부여하는 정서와 가치에 집중하며 깊은 신뢰를 보이는 당신은 명품의 본질적인 가치를 이해하고 탐닉하는데 망설이지 않습니다.</p><p class=\"Fifth_Page_Dscription_2\">&nbsp;일반적으로 브랜드에 깊은 이해를 지니고 있어 단순히 허상과 허울을 좇는 소비와는 구별되며, 소비에 있어 자신만의 철학을 가지고 있는 경우가 많습니다. 하지만 왕왕 과소비를 하는 사람으로 치부되어 감정이 상하거나 자신의 소비 철학에 대해 설명을 해야 할 때도 있습니다.</p>");
            $('#Editor>img').attr("src", "./image/2Editor_H.png");
            $('#Reco_Youtube>a').attr("href", "https://youtu.be/usRZpF9oDmc");
            $('#Reco_News>a').attr("href", "https://stibee.com/api/v1.0/emails/share/iTyIVohYEC2R7QtN-1D1D0KrMQ-d5Q==");
            $('#Fourth_Page_Bt').removeClass();
        } else if (Array_6 == Array_7 || Array_6 == Array_8 || Array_6 == Array_9 || Array_6 == Array_10) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_6 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_6_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_6) {
            $('.Fifth_Page_First_div').append("<div class=\"Fifth_Page_Title\"><p class=\"Fifth_Page_Title_Fontello\">&#xe804</p><p class=\"Fifth_Page_Title_Dscription\">&nbsp;당신은 재화나 서비스를 소비할 때 자신이 가지고 있는 로망실현에 많은 비중을 두며 높은 점수를 부여합니다.</p></div><p class=\"Fifth_Page_Dscription\">&nbsp;부엌에 놓인 정갈한 원목도마와 아름다움을 뽐내는 입구가 좁은 유리 물병 그리고 세련되고 모던한 느낌의 무거운 파스타 그릇</p><p class=\"Fifth_Page_Dscription_2\">&nbsp;지금까지 다양한 매체를 통해 차곡차곡 쌓고 기록한 로망에 대한 선망을 지닌 당신은 자신의 삶을 그것과 동기화하고 싶어 합니다. 그렇기에 이 경우 쇼핑목록을 엄마한테 들키는 순간 정신이 아찔해 지는 잔소리 폭탄을 듣게 되며, 본인 스스로도 비합리적인 선택을 하고 있다는 것을 알 때가 있지만 그렇다고 소비를 멈출 생각은 없습니다. 왜냐하면 그 자체로써 즐겁고 행복하기 때문입니다.</p>");
            $('#Editor>img').attr("src", "./image/3Editor_B.png");
            $('#Reco_Youtube>a').attr("href", "https://youtu.be/xF9SI90f2EY");
            $('#Reco_News>a').attr("href", "https://stibee.com/api/v1.0/emails/share/cfIl3PpxSiP1h0Hsqrzhg4n-y-QHqQ==");
            $('#Fourth_Page_Bt').removeClass();
        } else if (Array_7 == Array_8 || Array_7 == Array_9 || Array_7 == Array_10) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_7 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_7_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_7) {
            $('.Fifth_Page_First_div').append("<div class=\"Fifth_Page_Title\"><p class=\"Fifth_Page_Title_Fontello\">&#xe805</p><p class=\"Fifth_Page_Title_Dscription\">&nbsp;당신은 재화나 서비스를 소비할 때 현재의 감정에 충실하며 이에 높은 점수를 부여합니다.</p></div><p class=\"Fifth_Page_Dscription\">&nbsp;지금 이 순간에 충실 하라는 카르페 디엠(Carpe Diem)을 몸소 실천하는 당신은 즉흥적이고 즉각적인 소비를 지향합니다.</p><p class=\"Fifth_Page_Dscription_2\">&nbsp;주위로부터 왕왕 결단력과 추진력이 좋다는 소리를 들으며, 불편함과 필요함이 생겼을 때 즉각적으로 문제를 해결하기 위해 움직이는 편입니다. 그렇기에 단기적인 소비만족도는 그 어느 유형보다 높은 편이지만 장기적인 소비만족도는 다소 떨어지는 편입니다. 종종 자신과 같은 물건을 더 저렴하게 구입한 친구를 보며 동공지진이 일으키거나 너 나은 선택지가 뒤늦게 떠올라 기분이 다운되기도 합니다.</p>");
            $('#Editor>img').attr("src", "./image/3Editor_B.png");
            $('#Reco_Youtube>a').attr("href", "https://youtu.be/sYbAwXefssM");
            $('#Reco_News>a').attr("href", "https://stibee.com/api/v1.0/emails/share/j_JVA6eF2e0iwZUeGTvBK3QXOLbZIg==");
            $('#Fourth_Page_Bt').removeClass();
        } else if (Array_8 == Array_9 || Array_8 == Array_10) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_8 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_8_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_8) {
            $('.Fifth_Page_First_div').append("<div class=\"Fifth_Page_Title\"><p class=\"Fifth_Page_Title_Fontello\">&#xf200</p><p class=\"Fifth_Page_Title_Dscription\">&nbsp;당신은 재화나 서비스를 소비할 때 세부적인 정보를 꼼꼼히 살피며 신중한 결정을 지향하며 이에 높은 점수를 부여합니다.</p></div><p class=\"Fifth_Page_Dscription\">&nbsp;상품의 상세페이지를 정독하고 다양한 상품을 서로 비교하며 사용자 리뷰와 별점 등 어느 것 하나 빼놓지 않고 알아보는 당신은 높은 확률로 모임의 총무역할을 담당하기도 합니다.</p><p class=\"Fifth_Page_Dscription_2\">&nbsp;제품과 서비스에 높은 이해를 가짐으로써 장기적인 소비만족도는 높지만 즉각적인 소비에 어색함을 느끼며 소비활동에서 오는 피로감으로 인해 “사는 즐거움”이 줄어들거나 쇼핑을 귀찮아하는 경우도 생깁니다.</p>");
            $('#Editor>img').attr("src", "./image/3Editor_B.png");
            $('#Reco_Youtube>a').attr("href", "https://youtu.be/1YDSFu5yVbA");
            $('#Reco_News>a').attr("href", "https://stibee.com/api/v1.0/emails/share/Qr-vTvSnURQv-oY94CEfviZZhy2L2w==");
            $('#Fourth_Page_Bt').removeClass();
        } else if (Array_9 == Array_10) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_9 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_9_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_9) {
            $('.Fifth_Page_First_div').append("<div class=\"Fifth_Page_Title\"><p class=\"Fifth_Page_Title_Fontello\">&#xe806</p><p class=\"Fifth_Page_Title_Dscription\">&nbsp;당신은 재화나 서비스를 소비 할 때 경제적인 부문에 민감하게 반응하고 이에 높은 점수를 부여합니다.</p></div><p class=\"Fifth_Page_Dscription\">&nbsp;신규가입 혜택, 할인쿠폰, 묶음배송, 추가 적립금, 해외직구 등 소비를 선택할 때 경제적인 이점을 깊게 생각하는 당신은 같은 물건을 상대적으로 저렴하게 구입했을 때 오는 즐거움과 짜릿함을 알고 있는 사람입니다.</p><p class=\"Fifth_Page_Dscription_2\">&nbsp;다양한 선택지를 알아보고 비교하고 소비하기 때문에 기본적인 소비만족도는 상대적으로 높은 편이지만 가성비의 늪에 심취해 도리어 불합리한 선택을 하는 경우도 있습니다.</p>");
            $('#Editor>img').attr("src", "./image/4YUNHEE_PD.png");
            $('#Reco_Youtube>a').attr("href", "https://youtu.be/AonAMHMQjgo");
            $('#Reco_News>a').attr("href", "https://stibee.com/api/v1.0/emails/share/y2hUeFMFa2eumnjVwwhCBledqO_bpw==");
            $('#Fourth_Page_Bt').removeClass();
        } else if (TopScore == Array_10) {
            $('.Fifth_Page_First_div').append("<div class=\"Fifth_Page_Title\"><p class=\"Fifth_Page_Title_Fontello\">&#xf1e9</p><p class=\"Fifth_Page_Title_Dscription\">&nbsp;당신은 재화나 서비스를 소비 할 때 신제품에 대한 궁금증 해소에 집중하며 이에 높은 점수를 부여합니다.</p></div><p class=\"Fifth_Page_Dscription\">&nbsp;일명 얼리 어답터로 불리는 당신은 제품이 출시될 때 가장 먼저 사용해보고 평가를 내리거나 주위에 정보를 알려주고 싶어 하는 성향을 지니고 있습니다.</p><p class=\"Fifth_Page_Dscription_2\">&nbsp;새하얀 눈이 내린 운동장에 처음으로 발자국을 남기는 장난스런 모습처럼 누구보다 먼저 제품 혹은 서비스를 이용해 본다는 것 자체에 큰 희열을 느끼며 만족감을 얻습니다. 하지만 평범한 소비주기보다 소비마디의 간격이 좁기 때문에 일반적으로 높은 소비비용을 부담하지만 최근에는 중고장터 등을 이용해 소비비용의 부담을 덜어내기도 합니다.</p>");
            $('#Editor>img').attr("src", "./image/2Editor_H.png");
            $('#Reco_Youtube>a').attr("href", "https://youtu.be/EPwMkC1wdr0");
            $('#Reco_News>a').attr("href", "https://stibee.com/api/v1.0/emails/share/9MB7XrZ3oSPzLR9RYM98gPF_miTYyA");
            $('#Fourth_Page_Bt').removeClass();
        }
        // Change of result graph color + appand point
        if (0 <= Array_1 && Array_1 <= 5) {
            $('#Re_1_1').css('background-color', '#F2AA4C');
            $('#Re_1_1').css('border-color', '#F2AA4C');
            var A1 = parseInt(Array_1);
            $('#Result_1>span').html(A1 + "점")
        } else if (6 <= Array_1 && Array_1 <= 12) {
            $('#Re_1_1').css('background-color', '#F2AA4C');
            $('#Re_1_1').css('border-color', '#F2AA4C');
            $('#Re_1_2').css('background-color', '#F2AA4C');
            $('#Re_1_2').css('border-color', '#F2AA4C');
            var A1 = parseInt(Array_1);
            $('#Result_1>span').html(A1 + "점")
        } else if (13 <= Array_1 && Array_1 <= 18) {
            $('#Re_1_1').css('background-color', '#F2AA4C');
            $('#Re_1_1').css('border-color', '#F2AA4C');
            $('#Re_1_2').css('background-color', '#F2AA4C');
            $('#Re_1_2').css('border-color', '#F2AA4C');
            $('#Re_1_3').css('background-color', '#F2AA4C');
            $('#Re_1_3').css('border-color', '#F2AA4C');
            var A1 = parseInt(Array_1);
            $('#Result_1>span').html(A1 + "점")
        } else if (19 <= Array_1 && Array_1 <= 24) {
            $('#Re_1_1').css('background-color', '#F2AA4C');
            $('#Re_1_1').css('border-color', '#F2AA4C');
            $('#Re_1_2').css('background-color', '#F2AA4C');
            $('#Re_1_2').css('border-color', '#F2AA4C');
            $('#Re_1_3').css('background-color', '#F2AA4C');
            $('#Re_1_3').css('border-color', '#F2AA4C');
            $('#Re_1_4').css('background-color', '#F2AA4C');
            $('#Re_1_4').css('border-color', '#F2AA4C');
            var A1 = parseInt(Array_1);
            $('#Result_1>span').html(A1 + "점")
        } else if (25 <= Array_1 && Array_1 <= 30) {
            $('#Re_1_1').css('background-color', '#F2AA4C');
            $('#Re_1_1').css('border-color', '#F2AA4C');
            $('#Re_1_2').css('background-color', '#F2AA4C');
            $('#Re_1_2').css('border-color', '#F2AA4C');
            $('#Re_1_3').css('background-color', '#F2AA4C');
            $('#Re_1_3').css('border-color', '#F2AA4C');
            $('#Re_1_4').css('background-color', '#F2AA4C');
            $('#Re_1_4').css('border-color', '#F2AA4C');
            $('#Re_1_5').css('background-color', '#F2AA4C');
            $('#Re_1_5').css('border-color', '#F2AA4C');
            var A1 = parseInt(Array_1);
            $('#Result_1>span').html(A1 + "점")
        }
        if (0 <= Array_2 && Array_2 <= 5) {
            $('#Re_2_1').css('background-color', '#7b9acc');
            $('#Re_2_1').css('border-color', '#7b9acc');
            var A2 = parseInt(Array_2);
            $('#Result_2>span').html(A2 + "점")
        } else if (6 <= Array_2 && Array_2 <= 12) {
            $('#Re_2_1').css('background-color', '#7b9acc');
            $('#Re_2_1').css('border-color', '#7b9acc');
            $('#Re_2_2').css('background-color', '#7b9acc');
            $('#Re_2_2').css('border-color', '#7b9acc');
            var A2 = parseInt(Array_2);
            $('#Result_2>span').html(A2 + "점")
        } else if (13 <= Array_2 && Array_2 <= 18) {
            $('#Re_2_1').css('background-color', '#7b9acc');
            $('#Re_2_1').css('border-color', '#7b9acc');
            $('#Re_2_2').css('background-color', '#7b9acc');
            $('#Re_2_2').css('border-color', '#7b9acc');
            $('#Re_2_3').css('background-color', '#7b9acc');
            $('#Re_2_3').css('border-color', '#7b9acc');
            var A2 = parseInt(Array_2);
            $('#Result_2>span').html(A2 + "점")
        } else if (19 <= Array_2 && Array_2 <= 24) {
            $('#Re_2_1').css('background-color', '#7b9acc');
            $('#Re_2_1').css('border-color', '#7b9acc');
            $('#Re_2_2').css('background-color', '#7b9acc');
            $('#Re_2_2').css('border-color', '#7b9acc');
            $('#Re_2_3').css('background-color', '#7b9acc');
            $('#Re_2_3').css('border-color', '#7b9acc');
            $('#Re_2_4').css('background-color', '#7b9acc');
            $('#Re_2_4').css('border-color', '#7b9acc');
            var A2 = parseInt(Array_2);
            $('#Result_2>span').html(A2 + "점")
        } else if (25 <= Array_2 && Array_2 <= 30) {
            $('#Re_2_1').css('background-color', '#7b9acc');
            $('#Re_2_1').css('border-color', '#7b9acc');
            $('#Re_2_2').css('background-color', '#7b9acc');
            $('#Re_2_2').css('border-color', '#7b9acc');
            $('#Re_2_3').css('background-color', '#7b9acc');
            $('#Re_2_3').css('border-color', '#7b9acc');
            $('#Re_2_4').css('background-color', '#7b9acc');
            $('#Re_2_4').css('border-color', '#7b9acc');
            $('#Re_2_5').css('background-color', '#7b9acc');
            $('#Re_2_5').css('border-color', '#7b9acc');
            var A2 = parseInt(Array_2);
            $('#Result_2>span').html(A2 + "점")
        }
        if (0 <= Array_3 && Array_3 <= 5) {
            $('#Re_3_1').css('background-color', '#A4193D');
            $('#Re_3_1').css('border-color', '#A4193D');
            var A3 = parseInt(Array_3);
            $('#Result_3>span').html(A3 + "점")
        } else if (6 <= Array_3 && Array_3 <= 12) {
            $('#Re_3_1').css('background-color', '#A4193D');
            $('#Re_3_1').css('border-color', '#A4193D');
            $('#Re_3_2').css('background-color', '#A4193D');
            $('#Re_3_2').css('border-color', '#A4193D');
            var A3 = parseInt(Array_3);
            $('#Result_3>span').html(A3 + "점")
        } else if (13 <= Array_3 && Array_3 <= 18) {
            $('#Re_3_1').css('background-color', '#A4193D');
            $('#Re_3_1').css('border-color', '#A4193D');
            $('#Re_3_2').css('background-color', '#A4193D');
            $('#Re_3_2').css('border-color', '#A4193D');
            $('#Re_3_3').css('background-color', '#A4193D');
            $('#Re_3_3').css('border-color', '#A4193D');
            var A3 = parseInt(Array_3);
            $('#Result_3>span').html(A3 + "점")
        } else if (19 <= Array_3 && Array_3 <= 24) {
            $('#Re_3_1').css('background-color', '#A4193D');
            $('#Re_3_1').css('border-color', '#A4193D');
            $('#Re_3_2').css('background-color', '#A4193D');
            $('#Re_3_2').css('border-color', '#A4193D');
            $('#Re_3_3').css('background-color', '#A4193D');
            $('#Re_3_3').css('border-color', '#A4193D');
            $('#Re_3_4').css('background-color', '#A4193D');
            $('#Re_3_4').css('border-color', '#A4193D');
            var A3 = parseInt(Array_3);
            $('#Result_3>span').html(A3 + "점")
        } else if (25 <= Array_3 && Array_3 <= 30) {
            $('#Re_3_1').css('background-color', '#A4193D');
            $('#Re_3_1').css('border-color', '#A4193D');
            $('#Re_3_2').css('background-color', '#A4193D');
            $('#Re_3_2').css('border-color', '#A4193D');
            $('#Re_3_3').css('background-color', '#A4193D');
            $('#Re_3_3').css('border-color', '#A4193D');
            $('#Re_3_4').css('background-color', '#A4193D');
            $('#Re_3_4').css('border-color', '#A4193D');
            $('#Re_3_5').css('background-color', '#A4193D');
            $('#Re_3_5').css('border-color', '#A4193D');
            var A3 = parseInt(Array_3);
            $('#Result_3>span').html(A3 + "점")
        }
        if (0 <= Array_4 && Array_4 <= 5) {
            $('#Re_4_1').css('background-color', '#DDA94B');
            $('#Re_4_1').css('border-color', '#DDA94B');
            var A4 = parseInt(Array_4);
            $('#Result_4>span').html(A4 + "점")
        } else if (6 <= Array_4 && Array_4 <= 12) {
            $('#Re_4_1').css('background-color', '#DDA94B');
            $('#Re_4_1').css('border-color', '#DDA94B');
            $('#Re_4_2').css('background-color', '#DDA94B');
            $('#Re_4_2').css('border-color', '#DDA94B');
            var A4 = parseInt(Array_4);
            $('#Result_4>span').html(A4 + "점")
        } else if (13 <= Array_4 && Array_4 <= 18) {
            $('#Re_4_1').css('background-color', '#DDA94B');
            $('#Re_4_1').css('border-color', '#DDA94B');
            $('#Re_4_2').css('background-color', '#DDA94B');
            $('#Re_4_2').css('border-color', '#DDA94B');
            $('#Re_4_3').css('background-color', '#DDA94B');
            $('#Re_4_3').css('border-color', '#DDA94B');
            var A4 = parseInt(Array_4);
            $('#Result_4>span').html(A4 + "점")
        } else if (19 <= Array_4 && Array_4 <= 24) {
            $('#Re_4_1').css('background-color', '#DDA94B');
            $('#Re_4_1').css('border-color', '#DDA94B');
            $('#Re_4_2').css('background-color', '#DDA94B');
            $('#Re_4_2').css('border-color', '#DDA94B');
            $('#Re_4_3').css('background-color', '#DDA94B');
            $('#Re_4_3').css('border-color', '#DDA94B');
            $('#Re_4_4').css('background-color', '#DDA94B');
            $('#Re_4_4').css('border-color', '#DDA94B');
            var A4 = parseInt(Array_4);
            $('#Result_4>span').html(A4 + "점")
        } else if (25 <= Array_4 && Array_4 <= 30) {
            $('#Re_4_1').css('background-color', '#DDA94B');
            $('#Re_4_1').css('border-color', '#DDA94B');
            $('#Re_4_2').css('background-color', '#DDA94B');
            $('#Re_4_2').css('border-color', '#DDA94B');
            $('#Re_4_3').css('background-color', '#DDA94B');
            $('#Re_4_3').css('border-color', '#DDA94B');
            $('#Re_4_4').css('background-color', '#DDA94B');
            $('#Re_4_4').css('border-color', '#DDA94B');
            $('#Re_4_5').css('background-color', '#DDA94B');
            $('#Re_4_5').css('border-color', '#DDA94B');
            var A4 = parseInt(Array_4);
            $('#Result_4>span').html(A4 + "점")
        }
        if (0 <= Array_5 && Array_5 <= 5) {
            $('#Re_5_1').css('background-color', '#1AAFBC');
            $('#Re_5_1').css('border-color', '#1AAFBC');
            var A5 = parseInt(Array_5);
            $('#Result_5>span').html(A5 + "점")
        } else if (6 <= Array_5 && Array_5 <= 12) {
            $('#Re_5_1').css('background-color', '#1AAFBC');
            $('#Re_5_1').css('border-color', '#1AAFBC');
            $('#Re_5_2').css('background-color', '#1AAFBC');
            $('#Re_5_2').css('border-color', '#1AAFBC');
            var A5 = parseInt(Array_5);
            $('#Result_5>span').html(A5 + "점")
        } else if (13 <= Array_5 && Array_5 <= 18) {
            $('#Re_5_1').css('background-color', '#1AAFBC');
            $('#Re_5_1').css('border-color', '#1AAFBC');
            $('#Re_5_2').css('background-color', '#1AAFBC');
            $('#Re_5_2').css('border-color', '#1AAFBC');
            $('#Re_5_3').css('background-color', '#1AAFBC');
            $('#Re_5_3').css('border-color', '#1AAFBC');
            var A5 = parseInt(Array_5);
            $('#Result_5>span').html(A5 + "점")
        } else if (19 <= Array_5 && Array_5 <= 24) {
            $('#Re_5_1').css('background-color', '#1AAFBC');
            $('#Re_5_1').css('border-color', '#1AAFBC');
            $('#Re_5_2').css('background-color', '#1AAFBC');
            $('#Re_5_2').css('border-color', '#1AAFBC');
            $('#Re_5_3').css('background-color', '#1AAFBC');
            $('#Re_5_3').css('border-color', '#1AAFBC');
            $('#Re_5_4').css('background-color', '#1AAFBC');
            $('#Re_5_4').css('border-color', '#1AAFBC');
            var A5 = parseInt(Array_5);
            $('#Result_5>span').html(A5 + "점")
        } else if (25 <= Array_5 && Array_5 <= 30) {
            $('#Re_5_1').css('background-color', '#1AAFBC');
            $('#Re_5_1').css('border-color', '#1AAFBC');
            $('#Re_5_2').css('background-color', '#1AAFBC');
            $('#Re_5_2').css('border-color', '#1AAFBC');
            $('#Re_5_3').css('background-color', '#1AAFBC');
            $('#Re_5_3').css('border-color', '#1AAFBC');
            $('#Re_5_4').css('background-color', '#1AAFBC');
            $('#Re_5_4').css('border-color', '#1AAFBC');
            $('#Re_5_5').css('background-color', '#1AAFBC');
            $('#Re_5_5').css('border-color', '#1AAFBC');
            var A5 = parseInt(Array_5);
            $('#Result_5>span').html(A5 + "점")
        }
        if (0 <= Array_6 && Array_6 <= 5) {
            $('#Re_6_1').css('background-color', '#FFDFDE');
            $('#Re_6_1').css('border-color', '#FFDFDE');
            var A6 = parseInt(Array_6);
            $('#Result_6>span').html(A6 + "점")
        } else if (6 <= Array_6 && Array_6 <= 12) {
            $('#Re_6_1').css('background-color', '#FFDFDE');
            $('#Re_6_1').css('border-color', '#FFDFDE');
            $('#Re_6_2').css('background-color', '#FFDFDE');
            $('#Re_6_2').css('border-color', '#FFDFDE');
            var A6 = parseInt(Array_6);
            $('#Result_6>span').html(A6 + "점")
        } else if (13 <= Array_6 && Array_6 <= 18) {
            $('#Re_6_1').css('background-color', '#FFDFDE');
            $('#Re_6_1').css('border-color', '#FFDFDE');
            $('#Re_6_2').css('background-color', '#FFDFDE');
            $('#Re_6_2').css('border-color', '#FFDFDE');
            $('#Re_6_3').css('background-color', '#FFDFDE');
            $('#Re_6_3').css('border-color', '#FFDFDE');
            var A6 = parseInt(Array_6);
            $('#Result_6>span').html(A6 + "점")
        } else if (19 <= Array_6 && Array_6 <= 24) {
            $('#Re_6_1').css('background-color', '#FFDFDE');
            $('#Re_6_1').css('border-color', '#FFDFDE');
            $('#Re_6_2').css('background-color', '#FFDFDE');
            $('#Re_6_2').css('border-color', '#FFDFDE');
            $('#Re_6_3').css('background-color', '#FFDFDE');
            $('#Re_6_3').css('border-color', '#FFDFDE');
            $('#Re_6_4').css('background-color', '#FFDFDE');
            $('#Re_6_4').css('border-color', '#FFDFDE');
            var A6 = parseInt(Array_6);
            $('#Result_6>span').html(A6 + "점")
        } else if (25 <= Array_6 && Array_6 <= 30) {
            $('#Re_6_1').css('background-color', '#FFDFDE');
            $('#Re_6_1').css('border-color', '#FFDFDE');
            $('#Re_6_2').css('background-color', '#FFDFDE');
            $('#Re_6_2').css('border-color', '#FFDFDE');
            $('#Re_6_3').css('background-color', '#FFDFDE');
            $('#Re_6_3').css('border-color', '#FFDFDE');
            $('#Re_6_4').css('background-color', '#FFDFDE');
            $('#Re_6_4').css('border-color', '#FFDFDE');
            $('#Re_6_5').css('background-color', '#FFDFDE');
            $('#Re_6_5').css('border-color', '#FFDFDE');
            var A6 = parseInt(Array_6);
            $('#Result_6>span').html(A6 + "점")
        }
        if (0 <= Array_7 && Array_7 <= 5) {
            $('#Re_7_1').css('background-color', '#A07855');
            $('#Re_7_1').css('border-color', '#A07855');
            var A7 = parseInt(Array_7);
            $('#Result_7>span').html(A7 + "점")
        } else if (6 <= Array_7 && Array_7 <= 12) {
            $('#Re_7_1').css('background-color', '#A07855');
            $('#Re_7_1').css('border-color', '#A07855');
            $('#Re_7_2').css('background-color', '#A07855');
            $('#Re_7_2').css('border-color', '#A07855');
            var A7 = parseInt(Array_7);
            $('#Result_7>span').html(A7 + "점")
        } else if (13 <= Array_7 && Array_7 <= 18) {
            $('#Re_7_1').css('background-color', '#A07855');
            $('#Re_7_1').css('border-color', '#A07855');
            $('#Re_7_2').css('background-color', '#A07855');
            $('#Re_7_2').css('border-color', '#A07855');
            $('#Re_7_3').css('background-color', '#A07855');
            $('#Re_7_3').css('border-color', '#A07855');
            var A7 = parseInt(Array_7);
            $('#Result_7>span').html(A7 + "점")
        } else if (19 <= Array_7 && Array_7 <= 24) {
            $('#Re_7_1').css('background-color', '#A07855');
            $('#Re_7_1').css('border-color', '#A07855');
            $('#Re_7_2').css('background-color', '#A07855');
            $('#Re_7_2').css('border-color', '#A07855');
            $('#Re_7_3').css('background-color', '#A07855');
            $('#Re_7_3').css('border-color', '#A07855');
            $('#Re_7_4').css('background-color', '#A07855');
            $('#Re_7_4').css('border-color', '#A07855');
            var A7 = parseInt(Array_7);
            $('#Result_7>span').html(A7 + "점")
        } else if (25 <= Array_7 && Array_7 <= 30) {
            $('#Re_7_1').css('background-color', '#A07855');
            $('#Re_7_1').css('border-color', '#A07855');
            $('#Re_7_2').css('background-color', '#A07855');
            $('#Re_7_2').css('border-color', '#A07855');
            $('#Re_7_3').css('background-color', '#A07855');
            $('#Re_7_3').css('border-color', '#A07855');
            $('#Re_7_4').css('background-color', '#A07855');
            $('#Re_7_4').css('border-color', '#A07855');
            $('#Re_7_5').css('background-color', '#A07855');
            $('#Re_7_5').css('border-color', '#A07855');
            var A7 = parseInt(Array_7);
            $('#Result_7>span').html(A7 + "점")
        }
        if (0 <= Array_8 && Array_8 <= 5) {
            $('#Re_8_1').css('background-color', '#FDD20E');
            $('#Re_8_1').css('border-color', '#FDD20E');
            var A8 = parseInt(Array_8);
            $('#Result_8>span').html(A8 + "점")
        } else if (6 <= Array_8 && Array_8 <= 12) {
            $('#Re_8_1').css('background-color', '#FDD20E');
            $('#Re_8_1').css('border-color', '#FDD20E');
            $('#Re_8_2').css('background-color', '#FDD20E');
            $('#Re_8_2').css('border-color', '#FDD20E');
            var A8 = parseInt(Array_8);
            $('#Result_8>span').html(A8 + "점")
        } else if (13 <= Array_8 && Array_8 <= 18) {
            $('#Re_8_1').css('background-color', '#FDD20E');
            $('#Re_8_1').css('border-color', '#FDD20E');
            $('#Re_8_2').css('background-color', '#FDD20E');
            $('#Re_8_2').css('border-color', '#FDD20E');
            $('#Re_8_3').css('background-color', '#FDD20E');
            $('#Re_8_3').css('border-color', '#FDD20E');
            var A8 = parseInt(Array_8);
            $('#Result_8>span').html(A8 + "점")
        } else if (19 <= Array_8 && Array_8 <= 24) {
            $('#Re_8_1').css('background-color', '#FDD20E');
            $('#Re_8_1').css('border-color', '#FDD20E');
            $('#Re_8_2').css('background-color', '#FDD20E');
            $('#Re_8_2').css('border-color', '#FDD20E');
            $('#Re_8_3').css('background-color', '#FDD20E');
            $('#Re_8_3').css('border-color', '#FDD20E');
            $('#Re_8_4').css('background-color', '#FDD20E');
            $('#Re_8_4').css('border-color', '#FDD20E');
            var A8 = parseInt(Array_8);
            $('#Result_8>span').html(A8 + "점")
        } else if (25 <= Array_8 && Array_8 <= 30) {
            $('#Re_8_1').css('background-color', '#FDD20E');
            $('#Re_8_1').css('border-color', '#FDD20E');
            $('#Re_8_2').css('background-color', '#FDD20E');
            $('#Re_8_2').css('border-color', '#FDD20E');
            $('#Re_8_3').css('background-color', '#FDD20E');
            $('#Re_8_3').css('border-color', '#FDD20E');
            $('#Re_8_4').css('background-color', '#FDD20E');
            $('#Re_8_4').css('border-color', '#FDD20E');
            $('#Re_8_5').css('background-color', '#FDD20E');
            $('#Re_8_5').css('border-color', '#FDD20E');
            var A8 = parseInt(Array_8);
            $('#Result_8>span').html(A8 + "점")
        }
        if (0 <= Array_9 && Array_9 <= 5) {
            $('#Re_9_1').css('background-color', '#2BAE66');
            $('#Re_9_1').css('border-color', '#2BAE66');
            var A9 = parseInt(Array_9);
            $('#Result_9>span').html(A9 + "점")
        } else if (6 <= Array_9 && Array_9 <= 12) {
            $('#Re_9_1').css('background-color', '#2BAE66');
            $('#Re_9_1').css('border-color', '#2BAE66');
            $('#Re_9_2').css('background-color', '#2BAE66');
            $('#Re_9_2').css('border-color', '#2BAE66');
            var A9 = parseInt(Array_9);
            $('#Result_9>span').html(A9 + "점")
        } else if (13 <= Array_9 && Array_9 <= 18) {
            $('#Re_9_1').css('background-color', '#2BAE66');
            $('#Re_9_1').css('border-color', '#2BAE66');
            $('#Re_9_2').css('background-color', '#2BAE66');
            $('#Re_9_2').css('border-color', '#2BAE66');
            $('#Re_9_3').css('background-color', '#2BAE66');
            $('#Re_9_3').css('border-color', '#2BAE66');
            var A9 = parseInt(Array_9);
            $('#Result_9>span').html(A9 + "점")
        } else if (19 <= Array_9 && Array_9 <= 24) {
            $('#Re_9_1').css('background-color', '#2BAE66');
            $('#Re_9_1').css('border-color', '#2BAE66');
            $('#Re_9_2').css('background-color', '#2BAE66');
            $('#Re_9_2').css('border-color', '#2BAE66');
            $('#Re_9_3').css('background-color', '#2BAE66');
            $('#Re_9_3').css('border-color', '#2BAE66');
            $('#Re_9_4').css('background-color', '#2BAE66');
            $('#Re_9_4').css('border-color', '#2BAE66');
            var A9 = parseInt(Array_9);
            $('#Result_9>span').html(A9 + "점")
        } else if (25 <= Array_9 && Array_9 <= 30) {
            $('#Re_9_1').css('background-color', '#2BAE66');
            $('#Re_9_1').css('border-color', '#2BAE66');
            $('#Re_9_2').css('background-color', '#2BAE66');
            $('#Re_9_2').css('border-color', '#2BAE66');
            $('#Re_9_3').css('background-color', '#2BAE66');
            $('#Re_9_3').css('border-color', '#2BAE66');
            $('#Re_9_4').css('background-color', '#2BAE66');
            $('#Re_9_4').css('border-color', '#2BAE66');
            $('#Re_9_5').css('background-color', '#2BAE66');
            $('#Re_9_5').css('border-color', '#2BAE66');
            var A9 = parseInt(Array_9);
            $('#Result_9>span').html(A9 + "점")
        }
        if (0 <= Array_10 && Array_10 <= 5) {
            $('#Re_10_1').css('background-color', '#333D79');
            $('#Re_10_1').css('border-color', '#333D79');
            var A10 = parseInt(Array_10);
            $('#Result_10>span').html(A10 + "점")
        } else if (6 <= Array_10 && Array_10 <= 12) {
            $('#Re_10_1').css('background-color', '#333D79');
            $('#Re_10_1').css('border-color', '#333D79');
            $('#Re_10_2').css('background-color', '#333D79');
            $('#Re_10_2').css('border-color', '#333D79');
            var A10 = parseInt(Array_10);
            $('#Result_10>span').html(A10 + "점")
        } else if (13 <= Array_10 && Array_10 <= 18) {
            $('#Re_10_1').css('background-color', '#333D79');
            $('#Re_10_1').css('border-color', '#333D79');
            $('#Re_10_2').css('background-color', '#333D79');
            $('#Re_10_2').css('border-color', '#333D79');
            $('#Re_10_3').css('background-color', '#333D79');
            $('#Re_10_3').css('border-color', '#333D79');
            var A10 = parseInt(Array_10);
            $('#Result_10>span').html(A10 + "점")
        } else if (19 <= Array_10 && Array_10 <= 24) {
            $('#Re_10_1').css('background-color', '#333D79');
            $('#Re_10_1').css('border-color', '#333D79');
            $('#Re_10_2').css('background-color', '#333D79');
            $('#Re_10_2').css('border-color', '#333D79');
            $('#Re_10_3').css('background-color', '#333D79');
            $('#Re_10_3').css('border-color', '#333D79');
            $('#Re_10_4').css('background-color', '#333D79');
            $('#Re_10_4').css('border-color', '#333D79');
            var A10 = parseInt(Array_10);
            $('#Result_10>span').html(A10 + "점")
        } else if (25 <= Array_10 && Array_10 <= 30) {
            $('#Re_10_1').css('background-color', '#333D79');
            $('#Re_10_1').css('border-color', '#333D79');
            $('#Re_10_2').css('background-color', '#333D79');
            $('#Re_10_2').css('border-color', '#333D79');
            $('#Re_10_3').css('background-color', '#333D79');
            $('#Re_10_3').css('border-color', '#333D79');
            $('#Re_10_4').css('background-color', '#333D79');
            $('#Re_10_4').css('border-color', '#333D79');
            $('#Re_10_5').css('background-color', '#333D79');
            $('#Re_10_5').css('border-color', '#333D79');
            var A10 = parseInt(Array_10);
            $('#Result_10>span').html(A10 + "점")
        }
    }, 500);
}