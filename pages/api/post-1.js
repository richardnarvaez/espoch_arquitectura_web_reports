export default (req, res) => {
  res.statusCode = 200
  res.json({ 
    title: 'Post 1',
    description: 'nananana',
    otro: '',
    list: [
      {
        title:"tiilosaksdasdasdksd",
        description: "desxrieasdklad"
      },
      {
        title:"tiilo 2",
        description: "descr"
      }
    ]
  })
}
