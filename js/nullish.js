//在JavaScript中，??运算符被称为nullish coalescing运算符(零合并操作符)。
//如果第一个参数不是null/undefined，这个运算符将返回第一个参数，否则，它将返回第二个参数。 
console.log('null??5=',null??5)
console.log('undefined??5=',undefined??5)
console.log('undefined??0=',undefined??0)
console.log('null??undefined=',null??undefined)
console.log('undefined??null=',undefined??null)
console.log('3??5=',3??5)
//4个未听说过的强大JavaScript操作符:https://www.bilibili.com/read/mobile?id=8768688
// 创建了一个函数moneyAmount，负责返回用户的当前余额。
// 如果使用||操作符来识别没有账户的用户，当一个用户没有账户时是什么意思呢？更准确的做法是将无账户视为null，
// 而不是0，因为银行账户可以存在无（或负）钱的情况。
// 在上面的例子中，||操作符将0视为一个假值，因此没有登记我们的用户有一个0美元的账户。
// 通过使用nullish coalescing操作符来解决这个问题。
let currentMoney=0
let noAccount=null
function accountBalance (balance){
    return balance?? "您目前没有该银行账户"
}
console.log('currentMoney=0时:',accountBalance(currentMoney))
let n=accountBalance(noAccount)
console.log('noAccount=null时:',n)
