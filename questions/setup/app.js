//using selectors inside the element
// traversing the dom

// const questionBtns = document.querySelectorAll('.question-btn');

// questionBtns.forEach(function(btn){
// btn.addEventListener('click', function(event){
// // console.log(event.currentTarget.parentElement.parentElement);
// const question = event.currentTarget.parentElement.parentElement;
// question.classList.toggle('show-text');
// });
// });


const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
  const btn = question.querySelector('.question-btn');
  // console.log(btn);
  btn.addEventListener('click', function(){

    questions.forEach(function(article){
      if(article !== question) {
        article.classList.remove('show-text');
      }
    });
     question.classList.toggle('show-text');
  });
});
