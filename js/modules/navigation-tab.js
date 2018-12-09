export default function initNavigationTab() {
$('.tab-list').each(function() {
    const $this = $(this);
    let $tab = $this.find('li.active');
    const $link = $tab.find('a');
    let $panel = $($link.attr('href'));
  
    $this.on('click', '.tab-control', function(e) {
      e.preventDefault();
      let $link = $(this);
      let id = this.hash;
  
      if  (id && !$link.is('active')) {
        $panel.removeClass('active');
        $tab.removeClass('active');
  
        $panel = $(id).addClass('active');
        $tab = $link.parent().addClass('active');
      }
    });
  });
}
