.ticker {
  width: 100%;
  background-color: #222; /* dark but visible */
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  font-weight: bold;
  font-size: 0.9rem;
  position: relative;
  z-index: 9999;
}

.ticker p {
  display: inline-block;
  padding-left: 100%;
  animation: ticker-scroll 15s linear infinite;
  margin: 0;
}

@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
