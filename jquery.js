document.addEventListener('DOMContentLoaded',function(){
  var filterContainer = document.querySelector('.portfolio .portfolio-filter'),
      filterButton = document.querySelectorAll('.portfolio .portfolio-filter button'),
      totalBtn = filterButton.length,
      portfolioItem = document.querySelectorAll('.portfolio .portfolio-item');
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
      

  // console.log(filterContainer);


},false)