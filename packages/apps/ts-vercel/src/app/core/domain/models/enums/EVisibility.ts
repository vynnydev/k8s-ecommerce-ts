/* eslint-disable no-redeclare */
export const EVisibility: {
  VISIBLE: 'VISIBLE'
  HIDDEN: 'HIDDEN'
  FEATURED: 'FEATURED'
  DEAL: 'DEAL'
} = {
  VISIBLE: 'VISIBLE',
  HIDDEN: 'HIDDEN',
  FEATURED: 'FEATURED',
  DEAL: 'DEAL',
}

export type EVisibility = (typeof EVisibility)[keyof typeof EVisibility]
