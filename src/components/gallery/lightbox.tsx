'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'
import type { Photo } from '@/lib/store/gallery-store'

interface LightboxProps {
  photo: Photo | null
  onClose: () => void
}

export function Lightbox({ photo, onClose }: LightboxProps) {
  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (photo) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [photo])

  return (
    <Dialog.Root open={!!photo} onOpenChange={() => onClose()}>
      <AnimatePresence>
        {photo && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50"
              />
            </Dialog.Overlay>
            
            <Dialog.Content className="fixed inset-0 z-50 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-full h-full flex items-center justify-center p-4"
              >
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white hover:text-primary-main transition-colors"
                  aria-label="Close lightbox"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Image container */}
                <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    className="object-contain w-full h-full"
                    priority
                  />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                    <p className="text-lg font-medium">{photo.caption}</p>
                    {photo.credit && (
                      <p className="text-sm text-white/80 mt-1">
                        Photo by: {photo.credit}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
} 