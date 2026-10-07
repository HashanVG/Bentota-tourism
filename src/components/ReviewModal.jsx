import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, X, CheckCircle2, Loader2 } from 'lucide-react'
import { submitReview } from '../services/reviewService'

const RATING_LABELS = {
  1: 'Poor',
  2: 'Fair',
  3: 'Good',
  4: 'Very Good',
  5: 'Exceptional',
}

export default function ReviewModal({ isOpen, onClose, onReviewSubmitted }) {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [rating, setRating] = useState(5)
  const [text, setText] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const resetForm = () => {
    setName('')
    setLocation('')
    setRating(5)
    setText('')
    setError('')
    setSubmitted(false)
    setSubmitting(false)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Please provide your name.')
      return
    }

    if (!text.trim() || text.trim().length < 10) {
      setError('Please write at least 10 characters for your review.')
      return
    }

    setSubmitting(true)
    try {
      const newReview = await submitReview({
        name,
        location,
        rating,
        text,
      })

      setSubmitted(true)
      if (onReviewSubmitted) {
        onReviewSubmitted(newReview)
      }

      setTimeout(() => {
        handleClose()
      }, 2200)
    } catch (err) {
      console.error('Error submitting review:', err)
      setError('Failed to submit review. Please ensure your internet is connected or try again.')
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-forest-dark/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100"
          >
            {/* Header */}
            <div className="bg-forest-primary px-6 py-5 sm:px-8 text-white flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">Write a Review</h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 mt-0.5 font-normal">Share your experience with Samantha Tours</p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0 ml-4"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-forest-primary flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="font-display text-2xl text-forest-dark mb-2">Thank you, {name}!</h4>
                  <p className="text-gray-600 text-sm max-w-sm">
                    Your review has been successfully submitted and is now displayed on the website.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Rating Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-forest-text mb-2">
                      Your Rating
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const active = rating >= star
                          return (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              className="p-1 focus:outline-none focus:scale-110 active:scale-95 transition-transform cursor-pointer"
                              aria-label={`${star} star`}
                            >
                              <Star
                                className={`w-7 h-7 transition-colors ${
                                  active
                                    ? 'fill-forest-gold text-forest-gold'
                                    : 'text-gray-200 hover:text-gray-300'
                                }`}
                              />
                            </button>
                          )
                        })}
                      </div>
                      <span className="text-sm font-medium text-forest-dark ml-2">
                        {RATING_LABELS[rating]}
                      </span>
                    </div>
                  </div>

                  {/* Name and Location Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="reviewer-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-forest-text mb-1.5"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="reviewer-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-forest-primary/30 focus:border-forest-primary transition"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="reviewer-location"
                        className="block text-xs font-semibold uppercase tracking-wider text-forest-text mb-1.5"
                      >
                        Country / City
                      </label>
                      <input
                        id="reviewer-location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. United Kingdom"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-forest-primary/30 focus:border-forest-primary transition"
                      />
                    </div>
                  </div>

                  {/* Review Text */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="reviewer-text"
                        className="block text-xs font-semibold uppercase tracking-wider text-forest-text"
                      >
                        Your Experience <span className="text-red-500">*</span>
                      </label>
                      <span className="text-xs text-gray-400">
                        {text.length} chars (min 10)
                      </span>
                    </div>
                    <textarea
                      id="reviewer-text"
                      rows={4}
                      required
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Tell future travelers about your tour with Samantha..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-forest-primary/30 focus:border-forest-primary transition resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {error && (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2.5">
                      {error}
                    </p>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleClose}
                      disabled={submitting}
                      className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-2.5 rounded-xl bg-forest-primary hover:bg-forest-primary/90 text-white text-sm font-medium shadow-md shadow-forest-primary/20 flex items-center gap-2 transition disabled:opacity-50 cursor-pointer"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Post Review'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
