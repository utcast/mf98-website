import ticketData from '~/static/json/tickets.json'

export const useTickets = () => {
  const getTicketStatus = (id: number) => {
    return ticketData[id] || { reserved: 0, limit: 0 }
  }
  return { getTicketStatus }
}
