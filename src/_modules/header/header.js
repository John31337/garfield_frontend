'use strict';

const Header = () => {
  var ticking = false;
  var lastScrollY;
  const header = document.querySelector('.header');
  const mq = window.matchMedia('(min-width: 1201px)');

  const mark = document.querySelector('.adrides-mark');
  const about = document.querySelector('.adrides-store');
  const buy = document.querySelector('.adrides-bag');
  const tokenomics = document.querySelector('.adrides-keyfeature');

  /**
   * Callback for our scroll event - just
   * keeps track of the last scroll value
   */
  async function onScroll() {
    // var mark_visible_percentage = percentWithinViewport(mark_visible);
    // console.log(mark_visible_percentage);
    var about_visible = await isVisible(about);
    setAnimation(about_visible, about, "animation-fade-slide-down");

    var mark_visible = await isVisible(mark);
    setAnimation(mark_visible, mark, "animation-fade-slide-down");

    var buy_visible = await isVisible(buy);
    setAnimation(buy_visible, buy, "animation-fade-slide-down");

    var tokenomics_visible = await isVisible(tokenomics);
    setAnimation(tokenomics_visible, tokenomics, "animation-fade-slide-down");

    lastScrollY = window.scrollY;
    requestTick();
  }

  function setAnimation(visible, ele, animation)
  {
    if(visible)
    {
      ele.classList.add(animation);
    } else 
    {
      // ele.classList.remove(animation);
    }
  }

  /**
  * Calls rAF if it's not already
  * been done already
  */
  function requestTick() {
    if(!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  function isVisible(elem) {
    if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
    const style = getComputedStyle(elem);
    if (style.display === 'none') return false;
    if (style.visibility !== 'visible') return false;
    if (style.opacity < 0.1) return false;
    if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width === 0) {
        return false;
    }
    const elemCenter   = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };
    if (elemCenter.x < 0) return false;
    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
    if (elemCenter.y < 0) return false;
    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
        if (pointContainer === elem) return true;
    } while (pointContainer = pointContainer.parentNode);
    return false;
}
  /**
  * Our animation callback
  */
  function update() {
    if (lastScrollY >= 20){
      // header.classList.add('fixed');
      //navlist.classList.add('nav-list-left-show');
      //socialIcon.classList.add('nav-list-right-show');
    } else {
      //header.classList.remove('fixed');
      //navlist.classList.remove('nav-list-left-show');
      //socialIcon.classList.remove('nav-list-right-show');
    }

    if(mq.matches){
      if (lastScrollY >= 520){
        
        header.classList.add('fixed-cta');
      } else {
        header.classList.remove('fixed-cta');
      }
    }
  // allow further rAFs to be called
    ticking = false;
  }

  // only listen for scroll events
  window.addEventListener('scroll', onScroll, false);
  window.onload = function(e) {
    const iframe = document.querySelector('iframe').contentWindow.document;
    // const body = iframe.firstChild;
    console.log(iframe);
  }
};

export default Header()