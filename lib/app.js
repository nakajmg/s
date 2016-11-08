var talkie = Talkie({
  wide: false
})
talkie.key('space').subscribe(talkie.next$)
talkie.key('s').subscribe(talkie.next$)
talkie.key('n').subscribe(talkie.next$)
talkie.key('a').subscribe(talkie.prev$)
talkie.key('p').subscribe(talkie.prev$)

document.addEventListener('DOMContentLoaded', function() {
  talkie.changed.subscribe(function(current) {
    console.info(talkie.notes[current.getAttribute('data-page')])
  })
})
