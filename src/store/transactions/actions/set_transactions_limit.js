export default function set_transactions_limit(val) {
  return {
    type: 'SET_TRANSACTIONS_LIMIT',
    val,
  }
}