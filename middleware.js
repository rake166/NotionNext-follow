import { NextResponse } from 'next/server'

export function middleware(req) {
  // 获取 Authorization header
  const basicAuth = req.headers.get('authorization')

  // 你的账号和密码 (建议不要直接写死在这里，最好用环境变量，见下文)
  // 这里为了演示，假设账号是 admin，密码是 123456
  // 如果你想简单点，可以直接改这里：
  const targetUser = process.env.SITE_USER || 'admin'
  const targetPwd = process.env.SITE_PASSWORD || '123456'

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    // 解码 base64
    const [user, pwd] = atob(authValue).split(':')

    if (user === targetUser && pwd === targetPwd) {
      return NextResponse.next()
    }
  }

  // 如果验证失败或没有验证，返回 401 状态码，触发浏览器弹窗
  return new NextResponse('Auth Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

// 匹配所有路径，除了静态资源（图片、favicon等）
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
