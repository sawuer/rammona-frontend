export default function get_transactions(val) {
  return {
    type: 'GET_TRANSACTIONS',
    val,
  }
}