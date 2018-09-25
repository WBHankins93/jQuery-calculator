$('.allClear').on('click', () => {
  $('input').val('0');
});

$('.equals').on('click', () =>  {
  let eq = $('input').val();
  eq = eq.slice(0, eq.length -1);
  eq = eval(eq);
  $('input').val(eq);
});
