var personItems = new Array();


function init() {
  // Grab the person items from the page
    var divs = document.getElementsByClassName( 'personItem' );
    for ( var i = 0; i < divs.length; i++ ) {
      personItems.push( divs[i] );
    }

  // Assign onclick events to the person item headings
  for ( var i = 0; i < personItems.length; i++ ) {
    var h2 = getFirstChildWithTagName( personItems[i], 'H2' );
    h2.onclick = toggleItem;
  }

  // Hide all person item bodies except the first
  for ( var i = 1; i < personItems.length; i++ ) {
    personItems[i].className = 'personItem hide';
  }
}


function toggleItem() {
  var itemClass = this.parentNode.className;

  // Hide all items
  for ( var i = 0; i < personItems.length; i++ ) {
    personItems[i].className = 'personItem hide';
  }

  // Show this item if it was previously hidden
  if ( itemClass == 'personItem hide' ) {
    this.parentNode.className = 'personItem';

  }
}


function getFirstChildWithTagName( element, tagName ) {
  for ( var i = 0; i < element.childNodes.length; i++ ) {
    if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
  }
}