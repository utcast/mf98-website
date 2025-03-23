import { ref, onMounted } from 'vue'

interface Ticket {
  id: number
  reserved: number
  limit: number
}

const ticketData = ref<Ticket[]>([])

export const useTickets = () => {
  const fetchTickets = async () => {
    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycby5suexYWHerSXvPKLqzaUEkquTrOPP716e_1DTq3V84YxSMwq3xtW5lZ_oYiOXkwZY/exec')
      ticketData.value = await res.json()
    } catch (err) {
      console.error('チケットデータの取得に失敗しました:', err)
    }
  }

  const getTicketStatus = (id: number) => {
    return ticketData.value.find((t) => t.id === id) || { reserved: 0, limit: 0 }
  }

  // 自動でAPIをコール（onMountedでもOK）
  onMounted(() => {
    fetchTickets()
  })

  return { fetchTickets, getTicketStatus }
}

