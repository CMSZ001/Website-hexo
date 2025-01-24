hexo.extend.injector.register("body_end", () => {
  // 替换为你的 Umami 脚本地址和网站 ID
  const umamiScript = `
    <script defer src="https://umami.acmsz.top/c4573967-e300-e2d0-6f2e-368c9dd37be0" data-website-id="4164eba8-0bbc-45ad-aa1c-ce2e2d5a4cc1"></script>
  `;
  return umamiScript;
}, "default");