preventDefault(); const otp = document. getElementById('otp-input'). value; const data = { phoneNumber: phoneNumber, otp: otp }; const response = fetch('/verify-otp', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON. stringify(data) });
</script>
</body>
</html>