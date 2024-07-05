$(function () {

    $(".list li").click(function () {
        $(this).children("a").addClass("bg");
    }) /* click */

    $(".list li").mouseleave(function () {
        $(this).find("a").removeClass("bg");
    }) /* mouseleave */

    $(".list1 li a").click(function () {
        $(this).toggleClass("txt");
    }) /* click */

    $(".list2 li a").hover(function () {
        $(this).addClass("box_over");
    }, function () {
        $(this).removeClass("box_over")
    }) /* hover */

    $(".list3 li a").mouseover(function(){
        $(this).addClass("grid_b");
    })
    $(".list3 li a").mouseleave(function(){
        $(this).removeClass("grid_b");
    })
    $(".list3 li a").click(function(){
        $(this).toggleClass("grid_t");
    })

    /* click */

}) //jquery