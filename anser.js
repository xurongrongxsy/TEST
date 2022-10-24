
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

//第四题

// 在遥远的国度有一位国王，在他手下有一支战无不胜的军队，但是他觉得这还不够，他决定继续通过训练提升军队的实力。军队中共有n名战士，其中第i位的战斗力为ai。在第i次训练中，国王会先找出战斗力最低的战士，
// 假设他的战斗力为x，则国王会同时训练所有战斗力为x的战士，将他们的战力都提升bi (从x变为x + bi)，这样的训练一共会进行m次。同时，为了时刻了解军队的情况，国王请你帮他计算一下，在每次训练后所有战士的战斗力之和为多少。



// 输入描述
// 第一行两个正整数n和m，表示战士数量和训练次数。

// 第二行为n个正整数a1, a2,...... an (1 ≤ ai ≤ n)，其中ai表示第i个战士初始的战斗力为ai。

// 第三行为m个正整数b1, b2,...... bm，其中bi表示第i次训练后战士战斗力增加值为bi。

// 输出描述
// 输出一行m个正整数s1, s2,...... sm，其中si表示第i次训练后所有战士的战斗力之和。


let [num,count] = read_line().trim().split(" ").map(i=>parseInt(i))

let zd = gets(num*4).split(" ").map(i=>parseInt(i))

let zdadd=gets(count*4).split(" ").map(i=>parseInt(i))


function fn(zd,num,addnum){
  zd.sort((a,b)=>a-b)
  let t = [zd[0]]
  let sum = 0
  for(let i = 0;i<num;i++){
    if(zd[i]>t || zd[i]>=310){
      break
    }else{
      if(zd[i]<=(310-addnum)){
        zd[i]+=addnum
      }else{
        zd[i] = 310
      }
    }
  }
}
function sum(arr) {
  var s = 0;
  arr.forEach(function(val, idx, arr) {
    s += val;
  }, 0);
  
  return s;
};

let a=[]
for(let i=0;i<count;i++){
  fn(zd,num,zdadd[i])

  a.push(sum(zd))
}
print(a.join(" "))
// 第四题超时