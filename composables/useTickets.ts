import ticketData from '@/static/json/tickets.json'

type TicketData = {
  [key: string]: { reserved: number; limit: number }
}

export const useTickets = () => {
  const getTicketStatus = (id: number) => {
    return (ticketData as TicketData)[id.toString()] || { reserved: 0, limit: 0 }
  }
  return { getTicketStatus }
}
