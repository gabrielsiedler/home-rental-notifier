// import chalk from 'chalk'
// // import blessed from 'blessed'

// export const ui = (data: any) => {
//   // Create a screen object.
//   var screen = blessed.screen({
//     smartCSR: true,
//   })

//   screen.title = 'my window title'

//   // Create a box perfectly centered horizontally and vertically.
//   var box = blessed.box({
//     width: '20%',
//     height: '30%',
//     content: `${chalk.bold.blue('Brognoli')}\n\nFound: ${data.success}\nFound: ${data.success}\nFound: ${
//       data.success
//     }\nFound: ${data.success}\nFound: ${data.success}\nFound: ${data.success}`,
//     tags: true,
//     border: {
//       type: 'line',
//     },
//     style: {
//       fg: 'white',
//       border: {
//         fg: '#f0f0f0',
//       },
//     },
//   })

//   // Append our box to the screen.
//   screen.append(box)

//   // box.on('click', function (data) {
//   //   box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}')
//   //   screen.render()
//   // })

//   // If box is focused, handle `enter`/`return` and give us some more content.
//   box.key('enter', function (ch, key) {
//     box.setContent('{right}EEven different {black-fg}content{/black-fg}.{/right}\n')
//     box.setLine(1, 'bar')
//     box.insertLine(1, 'foo')
//     screen.render()
//   })

//   // Quit on Escape, q, or Control-C.
//   screen.key(['escape', 'q', 'C-c'], function (ch, key) {
//     return process.exit(0)
//   })

//   // Focus our element.
//   box.focus()

//   // Render the screen.
//   screen.render()
// }
