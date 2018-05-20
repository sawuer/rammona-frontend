export default function get_transactions_count(val) {
  return {
    type: 'GET_TRANSACTIONS_COUNT',
    val,
  }
}