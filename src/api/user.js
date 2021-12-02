function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export async function login(loginId, loginPwd) {
  await delay(1000);
  if (loginId === 'admin' && loginPwd === '123123') {
    const user = {
      loginId,
      name: '管理员',
    };
    localStorage.setItem('user', JSON.stringify(user));
    return user;
    // 登录完了会返回user这个对象 而这里的localStorage就是你的本地仓库
  }
  return null;
}

export async function loginOut() {
  await delay(1000);
  localStorage.removeItem('user');
  // 退出就是你删除你的user用户
}

export async function whoAmI() {
  await delay(1000);
  const user = localStorage.getItem('user');
  // 返回的user在本地的仓库里查看是不是有这个值
  if (user) {
    return JSON.parse(user);
  }
  // 如果有 就会保存值来缓存下一次的用户名
  return null;
}
