
//第三题
// 减法
// 时间限制： 3000MS
// 内存限制： 589824KB
// 题目描述：
// 小明正在玩一个游戏，游戏开始时有一个数N，在每回合中他可以进行如下操作：

// 1． 选择一个正整数x∈[1, K]

// 2． 令N变为N-x

// 3． 如果N=0，游戏胜利

// 小明对数字d（某个阿拉伯数字）非常讨厌，所以他不希望在游戏中见到太多


let arr = read_line().trim().split(" ").map(i=>parseInt(i))

let [n,k,d] = arr

function fn(n,k,cont,d){
  if(!valid(n,d)){
    return -1
  }
  if(n<1){
    return cont
  }else if(n<=k){
    return ++cont
  }else{
    while(k){
      let aa = fn(n-k,k,++cont,d) 
      if(aa != -1){
        return aa
      }
      k--
    }
    return cont
  }
}

function valid(n,d){
  let str = (n+"").split("")
  let s = d+""
  let len = str.filter(i=>i===s).length
  if(len>1){
    return false
  }
  return true
}


print(fn(n,k,0,d))