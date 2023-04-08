let homeHeight=$("#home").outerHeight();
$(window).scroll(function(){
    let x= $(window).scrollTop();
    // console.log('a  '+homeHeight);
    // console.log('b  '+x);
    if(x>=homeHeight){
        $(".navbar").addClass('bg-dark');
        $(".navbar").removeClass('bg-transparent');
        $('.btn-up').fadeIn(1000);
    }else{
        $(".navbar").addClass('bg-transparent');
        $(".navbar").removeClass('bg-dark');
        $('.btn-up').fadeOut(1000);
    }
})

$('.btn-up').click(function(){
    $('body,html').animate({
        scrollTop:0
    },3000)
})
$('.navbar .nav-link').click(function(e){
    let x=$(e.target).attr('href');
    console.log(x);

    let offs=$(x).offset().top;
    $('body,html').animate({
        scrollTop:offs
    },1000)
})
let colors=['blue','teal','orange','white','#ff206e','red'];
for(let i=0;i<6;i++){
    $('.options li').eq(i).css('backgroundColor',colors[i]);
}
$('.options i').click(function(){
    let infoWidth= $('.options-slide').outerWidth();
    console.log('a  '+infoWidth);
    let x= $('.options').offset().left;
    console.log('x  '+x);
    if(x==0){
        $('.options').animate({left:-infoWidth},3000);
    }else{
        $('.options').animate({left:0},3000);
    }
    
})
$('.options li').click(function(e){
   let bg=$(e.target).css('backgroundColor');
   $('html').attr('style',`--mainColor:${bg}`);
})

$('.options img').click(function(e){
    let bg=$(e.target).attr('src');
    $('.header').css('backgroundImage',`url(${bg})`);
    $(e.target).css('transform',`scale(2)`);
    $(e.target).siblings().css('transform',`scale(1)`);

 })
