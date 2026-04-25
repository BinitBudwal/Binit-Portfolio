import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Binit Budwal | Computer Science @ UofM'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          border: '20px solid #18181b', // Dark zinc border
        }}
      >
        {/* Subtle Grid Background Effect */}
        <div style={{ display: 'flex', color: 'white', fontSize: 80, fontWeight: 'bold', letterSpacing: '-0.05em' }}>
          BINIT BUDWAL
        </div>
        <div style={{ color: '#71717a', fontSize: 30, marginTop: 20, textTransform: 'uppercase', letterSpacing: '0.3em' }}>
          Computer Science @ UofM
        </div>
        <div style={{ color: '#3f3f46', fontSize: 20, marginTop: 40, fontFamily: 'monospace' }}>
          {">"} SOFTWARE_DEVELOPER_NODE_01
        </div>
      </div>
    ),
    { ...size }
  )
}