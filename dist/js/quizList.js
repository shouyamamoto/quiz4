'use strict';

var quizList = [{
  q: 'appendの意味は？',
  a: [/付け(加え)?|る?|(合わせる)?/, /追加(する)?/]
}, {
  q: 'acceptの意味は？',
  a: [/承諾(する)?/, /受け((入れる)|(取る))/]
}, {
  q: 'allowの意味は？',
  a: [/許(可)?(す)?(する)?/]
}, {
  q: 'parentの意味は？',
  a: [/親/]
}, {
  q: 'childの意味は？',
  a: [/子(供)?/]
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXpMaXN0LmpzIl0sIm5hbWVzIjpbInF1aXpMaXN0IiwicSIsImEiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNmO0FBQUNDLEVBQUFBLENBQUMsRUFBRSxhQUFKO0FBQW1CQyxFQUFBQSxDQUFDLEVBQUUsQ0FBQyxvQkFBRCxFQUF1QixTQUF2QjtBQUF0QixDQURlLEVBRWY7QUFBQ0QsRUFBQUEsQ0FBQyxFQUFFLGFBQUo7QUFBbUJDLEVBQUFBLENBQUMsRUFBRSxDQUFDLFNBQUQsRUFBWSxnQkFBWjtBQUF0QixDQUZlLEVBR2Y7QUFBQ0QsRUFBQUEsQ0FBQyxFQUFFLFlBQUo7QUFBa0JDLEVBQUFBLENBQUMsRUFBRSxDQUFDLGdCQUFEO0FBQXJCLENBSGUsRUFJZjtBQUFDRCxFQUFBQSxDQUFDLEVBQUUsYUFBSjtBQUFtQkMsRUFBQUEsQ0FBQyxFQUFFLENBQUMsR0FBRDtBQUF0QixDQUplLEVBS2Y7QUFBQ0QsRUFBQUEsQ0FBQyxFQUFFLFlBQUo7QUFBa0JDLEVBQUFBLENBQUMsRUFBRSxDQUFDLE9BQUQ7QUFBckIsQ0FMZSxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcXVpekxpc3QgPSBbXG4gIHtxOiAnYXBwZW5k44Gu5oSP5ZGz44Gv77yfJywgYTogWy/ku5jjgZEo5Yqg44GIKT9844KLP3wo5ZCI44KP44Gb44KLKT8vLCAv6L+95YqgKOOBmeOCiyk/L119LFxuICB7cTogJ2FjY2VwdOOBruaEj+WRs+OBr++8nycsIGE6IFsv5om/6Ku+KOOBmeOCiyk/LywgL+WPl+OBkSgo5YWl44KM44KLKXwo5Y+W44KLKSkvXX0sXG4gIHtxOiAnYWxsb3fjga7mhI/lkbPjga/vvJ8nLCBhOiBbL+iosSjlj68pPyjjgZkpPyjjgZnjgospPy9dfSxcbiAge3E6ICdwYXJlbnTjga7mhI/lkbPjga/vvJ8nLCBhOiBbL+imqi9dfSxcbiAge3E6ICdjaGlsZOOBruaEj+WRs+OBr++8nycsIGE6IFsv5a2QKOS+myk/L119XG5dO1xuIl0sImZpbGUiOiJxdWl6TGlzdC5qcyJ9