document.addEventListener('DOMContentLoaded',function(){ 
    var icon_search= document.querySelector('.menu1 .phai .dropdown');
        nd_search = document.querySelector('.menu1 .phai .dropdown-menu'),
        chisoHienTai = 0;
// xử lí slide
    var nutPhai = document.querySelector('.slider .nutslide .nutPhai'),
        nutTrai = document.querySelector('.slider .nutslide .nutTrai'),
        ndSlide = document.querySelectorAll('.slider ul li');
        console.log(ndSlide),
        trangthai = 'dangDungYen';
// -------------------------------
// LOC CAC NUT 

// ---------------------------------
    // console.log(nd_search);
    icon_search.onclick = function(){
        nd_search.classList.toggle('hienra-timkiem');
    }
    // xử lí slide
    chuyenSlideNutPhai = function(){
        if(trangthai == 'dangChuyenDong'){return false;};
        trangthai = 'dangChuyenDong';
        
        var phantuHienTai = ndSlide[chisoHienTai];
        var soluongSlide = ndSlide.length;
        if(chisoHienTai < (soluongSlide-1))
        {
            chisoHienTai ++;
        } 
        else {
            chisoHienTai=0;
        }
        var phantuTiepTheo = ndSlide[chisoHienTai];
        var TTcua2CD = 0;
        // Xử dụng hàm check chuyen động
        HienTaiKetThucCD = function(){
            console.log('Hien Tại xong');
            this.classList.remove('active');
            this.classList.remove('bienMatKhiNext');
            this.classList.remove('diVaoKhiNext');
            TTcua2CD ++;
            if(TTcua2CD ==2){trangthai= 'dangDungYen';}
        }
        phantuHienTai.addEventListener('webkitAnimationEnd',HienTaiKetThucCD);
        TiepTheoKetThucCD = function(){
            console.log('TT xong');
            this.classList.add('active');
            this.classList.remove('bienMatKhiNext');
            this.classList.remove('diVaoKhiNext');
            TTcua2CD ++;
            if(TTcua2CD ==2){trangthai='dangDungYen';}
        }
        phantuTiepTheo.addEventListener('webkitAnimationEnd',TiepTheoKetThucCD);
        // -----------------------------
        phantuHienTai.classList.add('bienMatKhiNext');
        phantuTiepTheo.classList.add('diVaoKhiNext');
        phantuTiepTheo.classList.add('active');
        // sửa lỗi khi click nhiều lần
    }
    nutPhai.addEventListener('click', chuyenSlideNutPhai);
    // XỬ LÍ NÚT TRÁI
    chuyenSlideNutTrai = function(){
        if(trangthai == 'dangChuyenDong'){return false;}
        trangthai = 'dangChuyenDong';
        phantuHienTai = ndSlide[chisoHienTai];
        soluongSlide = ndSlide.length;
        if(chisoHienTai > 0){chisoHienTai--;}
        else if(chisoHienTai<= 0){
            chisoHienTai=(soluongSlide-1);
        }   
        phantuTiepTheo = ndSlide[chisoHienTai];
        var TTcua2CD = 0;
        HienTaiKetThucCD = function(){
            this.classList.remove('bienMatKhiPre');
            this.classList.remove('diVaoKhiPre');
            this.classList.remove('active');
            TTcua2CD ++;
            if(TTcua2CD == 2){trangthai = 'dangDungYen';}
        }
        TiepTheoKetThucCD = function(){
            this.classList.remove('bienMatKhiPre');
            this.classList.remove('diVaoKhiPre');
            this.classList.add('active');
            TTcua2CD ++;
            if(TTcua2CD == 2){trangthai = 'dangDungYen';}
        }

        // Xử lí chuyên động xong hay chưa
        phantuHienTai.addEventListener('webkitAnimationEnd',HienTaiKetThucCD);
        phantuTiepTheo.addEventListener('webkitAnimationEnd',TiepTheoKetThucCD);
        phantuHienTai.classList.add('bienMatKhiPre');
           phantuTiepTheo.classList.add('diVaoKhiPre');
        phantuTiepTheo.classList.add('active');
    }
    nutTrai.addEventListener('click', chuyenSlideNutTrai);
    // ---------------------------------------------------------------
// LOC FILTER DATA PỎRTFOLIO
    var filterContainer = document.querySelector('.project .portfolio-filter'),
    filterButton = document.querySelectorAll('.project .portfolio-filter button'),
    totalBtn = filterButton.length,
    portfolioItem = document.querySelectorAll('.project .portfolio-item');
    // console.log(portfolioItem);
    for(var i = 0; i<filterButton.length; i++){
        // console.log(filterButton[i]);
        filterButton[i].addEventListener('click',function(){
            for(var k = 0; k<filterButton.length; k++){
            filterButton[k].classList.remove('active');
            this.classList.add('active');
            }
        var dataFilter = this.getAttribute('data-filter');
        for(var j = 0; j<portfolioItem.length; j++){
            // console.log(portfolioItem[j]);
            if(dataFilter === portfolioItem[j].getAttribute('data-category'))
            {
            portfolioItem[j].classList.remove('hide');
            portfolioItem[j].classList.add('show');
            }
            else{
            portfolioItem[j].classList.add('hide');
            portfolioItem[j].classList.remove('show'); 
            }
            if(dataFilter === 'all'){
            portfolioItem[j].classList.remove('hide');
            portfolioItem[j].classList.add('show');
            }
        }
    })
    }

},false);




