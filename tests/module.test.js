const sum = require('./main');
 test(
     'Проверяем сумму чисел',
     () => {
         expect(sum(5, 2)).toBe(7)
     }
 );


 const reColor1 =  require('./main');
 test(
     'Проверяем порядок цветов',
     () => {
         expect(reColor1(4)).toBe('springgreen');
});