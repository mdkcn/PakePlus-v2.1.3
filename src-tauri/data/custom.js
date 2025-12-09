window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// 删除特定顶部导航栏div的自定义脚本
function removeSpecificHeader() {
  // 方法一：使用精确的CSS选择器匹配（推荐）
  // 此选择器匹配了您提供的所有class和行内样式特征
  const targetDiv = document.querySelector('div.flex.justify-between.items-center.w-full.px-4.bg-white1.border-b.border-transparent[style*="height: 48px;"]');
  
  // 方法二：如果方法一因动态类名失效，可以尝试通过更独特的子元素特征反向查找
  // const targetDiv = document.querySelector('a[href=" https://wwws.flowus.cn "]')?.closest('div.bg-white1.border-b');
  
  if (targetDiv) {
    // 调用父元素的removeChild方法删除目标节点
    if (targetDiv.parentNode) {
      targetDiv.parentNode.removeChild(targetDiv);
      console.log('PakePlus: 特定顶部导航栏已删除。');
    }
  } else {
    // 可选：如果元素不存在，记录信息或尝试在DOM更新后再次查找
    console.log('PakePlus: 未找到目标元素，可能页面结构已变化或元素尚未加载。');
  }
}

// 执行删除函数
removeSpecificHeader();

// 监听DOM变化，防止元素动态加载后重新出现（例如单页应用）
const observer = new MutationObserver(function(mutations) {
  // 检查是否有新节点添加，如果有则再次尝试删除
  for (let mutation of mutations) {
    if (mutation.addedNodes.length) {
      // 防抖处理，避免频繁执行
      clearTimeout(window.__removeHeaderTimeout);
      window.__removeHeaderTimeout = setTimeout(removeSpecificHeader, 500);
    }
  }
});

// 开始监听body子元素的变化
observer.observe(document.body, { childList: true, subtree: true });
