import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import PropTypes from 'prop-types'

import './utils/style/app.scss'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import Game from './pages/Game/Game'
import GameResult from './pages/GameResult/GameResult'
import Error from './pages/Error/Error'
import { AppProvider } from './contexts/AppProvider'

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/' && location.pathname !== '/menu' && <Header />}
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/game" element={<Game />} />
            <Route path="/game/results" element={<GameResult />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  )
}

export default App
