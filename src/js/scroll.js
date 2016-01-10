import $ from 'jquery';

let $sidebar = $('.doc-sidebar');
let $lis = $sidebar.find('li');
let topInfos = [];
$('.doc-sections section').each(function(index) {
    let top = $(this).offset().top;
    let height = $(this).height();
    topInfos.push({
        min: top,
        max: top + height
    })
});

$sidebar.css('left', $sidebar.offset().left);
let sidebarTop = $sidebar.offset().top - parseFloat($('.doc-header') .css('margin-bottom'));
let sidebarFixed = false;

let $returnTop = $('.return-top').click(function() {
    $('html, body').animate({ scrollTop: 0 });
});

$(window).on('scroll', function() {
    let scrollTop = $(this).scrollTop()
    if(scrollTop > sidebarTop) {
        if (!sidebarFixed) {
            $sidebar.addClass('doc-sidebar-fixed');
            sidebarFixed = true;
        }
    } else if (sidebarFixed) {
        $sidebar.removeClass('doc-sidebar-fixed');
        sidebarFixed = false;
    }

    if (scrollTop >= topInfos[0].min &&
        scrollTop <= topInfos[topInfos.length - 1].max) {
        for (let i = 0; i < topInfos.length; i++) {
            if (scrollTop >= topInfos[i].min &&
                scrollTop <= topInfos[i].max &&
                !$lis.eq(i).hasClass('active')) {
                $lis.filter('.active').removeClass('active');
                $lis.eq(i).addClass('active');
                break;
            }
        }
    } else {
        $lis.filter('.active').removeClass('active');
    }

    if(scrollTop > 0) {
        if ($returnTop.is(':hidden')) {
            $returnTop.show();
        }
    }
    else if ($returnTop.is(':visible')) {
        $returnTop.hide();
    }
});

$sidebar.on('click', 'li', function() {
    let targetSelector = $(this).data('target');
    $('html, body').animate({ scrollTop: $(targetSelector).offset().top });
});
