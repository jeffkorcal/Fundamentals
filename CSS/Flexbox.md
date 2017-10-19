# Flexbox

### UI Patterns in Flexbox
  - Equal heights
  - Vertical centered content
  - Media objects
  - Sticky footers
  - Column layouts

### Display Types
  - Block layout
  - Inline layout
  - Table layout
  - Position layout
  - Flex layout

### Flexbox
  - flex containers
    - controls the layout of child items but not grandchild elements
    - display: flex; (Block Level Container)
    - display: inline-flex; (Inline Container)
  - flex items
    - are direct children of a flex container and can be HTML elements or text
  - flex lines
    - are how the child items align

### Properties for the Parent (flex container)
  - display
    - display: flex
  - flex-direction
    - change the flex line or main axis to align items differently
    - flex-direction: row | row-reverse | column | column-reverse
    - setting the page element to 100% height uses all available space
  - flex-wrap
    - flex-wrap: nowrap | wrap | wrap-reverse
  - justify-content
    - used to distribute space on the main axis. (default: flex-start)
    - justify-content: flex-start | flex-end | center | space-between | space-around
  - align-items
    - used to distribute space on the cross axis. (default: strech)
    - align-items: stretch | flex-start | flex-end | center | baseline

 ### Properties for the Children (flex items)
  - order
    - order is used to determin the order of flex items along the main axis. It defaults to 0 accepts positive and negative numbers.
    - order: -1; will display before all items of 0
  - flex-grow
    - used it specify the ratio of the space an item should fill in the main axis. It accepts numbers and the default is 0.
    - flex-grow: 1; makes an item fill as much space as possible
  - flex-shrink
    - used to specifiy the "shrink factor" of all flex item. It accepts numbers and the default is 1
    - flex-shrink: 0; will not shrink element even if the window is resized (good for imgs)
  - flex-basis (good for layout)
    - used to specify the initial size of a flex item. It defaults to auto and currently supports CSS units: %, px, em, rem
    - flex-basis: 140px; give a particular item a width of 140px (good for imgs)
  - align-self
    - used to align individual flex items by overriding the align-items value. (default: stretch)
    - align-self: stretch | flex-start | flex-end | center | baseline;
  - align-content
    - used to align wrapped flex items. (default: stretch)
      align-content: flex-start | flex-end | center | space-between | space-around;
  - flex
    - shorthad property used to set values for flex-grow, flex-shrink, and flex-basis. (default: 0 1 auto )