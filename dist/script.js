///////////////////////////////////////////////////////////
// set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
  // toggle = both add & remove
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// const allLogoLinks = document.querySelectorAll('.logo');
// allLogoLinks.forEach(function (logo) {
//     logo.addEventListener('click', function (e) {
//         e.preventDefault();
//         sectionEl.scrollIntoView({ behavior: 'smooth' });
//     });
// });

// Close Mobile Navigation
//     if (link.classList.contains('main-nav-link'))
//       headerEl.classList.toggle('nav-open');

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0]; // the very first entry (array)

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }
    if (ent.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-60px'
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Making the nav tab bar have descriptions when the user leaves the page for a while
var pageTitle = document.title;
var attentionMessage = 'Missing you...';

document.addEventListener('visibilitychange', function (e) {
  var isPageActive = !document.hidden;

  if (!isPageActive) {
    document.title = attentionMessage;
  } else {
    document.title = pageTitle;
  }
});

function fnImgPop(url) {
  var img = new Image();
  img.src = url;
  var img_width = img.width;
  var win_width = img.width + 25;
  var img_height = img.height;
  var win = img.height + 30;
  var OpenWindow = window.open(
    '',
    '_blank',
    'width=' +
      img_width +
      ', height=' +
      img_height +
      ', menubars=no, scrollbars=auto'
  );
  OpenWindow.document.write(
    "<style>body{margin:0px;}</style><img src='" +
      url +
      "' width='" +
      win_width +
      "'>"
  );
}
