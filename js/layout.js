// layout.js - 导航栏和页脚模块化加载脚本
function loadLayout() {
  // 1. 导航栏HTML结构
  const navbarHtml = `
    <nav class="navbar">
      <div class="container nav-container">
        <a href="index.html" class="logo">凡人粉丝站</a>
        <ul class="nav-links">
          <li><a href="index.html" class="active">首页</a></li>
          <li><a href="/renwuzhi.html">人物志</a></li>
          <li><a href="/gushi.html">故事解析</a></li>
          <li><a href="/about.html">关于</a></li>
        </ul>
      </div>
    </nav>
  `;

  // 2. 页脚HTML结构
  const footerHtml = `
    <footer class="footer">
      <div class="footercontainer">
        <div class="footer-content">
          <div class="footer-column">
            <h3>凡人粉丝站</h3>
            <p>致力于为本小说爱好者提供一个交流、讨论、分享的平台。</p>
            <p>作者是“忘语”</p>
            <p>资源来源于网络，如有侵权，请联系客服予以删除！</p>
            <p class="copyright">© 2019 - 2025 All Rights Reserved</p>	
          </div>
        </div>
      </div>
    </footer>
  `;

  // 3. 导航栏和页脚的样式
  const layoutCss = `
    <style>
      /* 导航栏样式 */
      .navbar { 
        background-color: #2c3e50; 
        padding: 1rem 0; 
        color: #fff;
      }
      .nav-container { 
        width: 90%; 
        max-width: 1200px; 
        margin: 0 auto; 
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
      }
      .logo { 
        color: #fff; 
        font-size: 2rem; 
        font-weight: bold; 
        text-decoration: none; 
      }
      .nav-links { 
        list-style: none; 
        display: flex; 
        gap: 2rem; 
        margin: 0; 
        padding: 0; 
      }
      .nav-links a { 
        color: #fff; 
        text-decoration: none; 
        transition: color 0.3s; 
      }
      .nav-links a.active, 
      .nav-links a:hover { 
        color: #3498db; 
      }

      /* 页脚样式 */
      .footer {
        background-color: #2c3e50;
        color: #ecf0f1;
        padding: 3rem 0;
        margin-top: auto;
      }
      .footercontainer {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
      }
      .footer-content {
        display: flex;
        flex-wrap: wrap;
      }
      .footer-column {
        flex: 1;
        min-width: 250px;
      }
      .footer-column h3 {
        color: #3498db;
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
      }
      .footer-column p {
        margin: 0.5rem 0;
        line-height: 1.6;
      }
      .copyright {
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid #34495e;
        font-size: 0.9rem;
        color: #bdc3c7;
      }

      /* 确保页脚在页面底部的辅助样式 */
      html, body {
        height: 100%;
        margin: 0;
      }
      body {
        display: flex;
        flex-direction: column;
      }
      main {
        flex: 1;
      }
    </style>
  `;

  // 4. 将样式插入头部
  document.head.insertAdjacentHTML('beforeend', layoutCss);
  
  // 5. 将导航栏插入页面顶部
  document.body.insertAdjacentHTML('afterbegin', navbarHtml);
  
  // 6. 将页脚插入页面底部
  document.body.insertAdjacentHTML('beforeend', footerHtml);

  // 7. 自动高亮当前页面的导航链接
  highlightCurrentPage();
}

// 自动高亮当前页面的导航链接
function highlightCurrentPage() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop() || 'index.html';
    if (linkPath === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// 页面加载完成后自动执行
window.addEventListener('load', loadLayout);
