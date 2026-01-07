import React from 'react'

const Footer = () => {
  return (
      <div className="pt-4 border-t border-slate-700 text-center text-slate-400">
          <p className="text-sm">&copy; {new Date().getFullYear()} Md Fahad. All rights reserved.</p>
        </div>
  )
}

export default Footer