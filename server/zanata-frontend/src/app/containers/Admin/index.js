/*
 * Copyright 2017, Red Hat, Inc. and individual contributors
 *  as indicated by the @author tags. See the copyright.txt file in the
 *  distribution for a full listing of individual contributors.
 *
 *  This is free software; you can redistribute it and/or modify it
 *  under the terms of the GNU Lesser General Public License as
 *  published by the Free Software Foundation; either version 2.1 of
 *  the License, or (at your option) any later version.
 *
 *  This software is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this software; if not, write to the Free
 *  Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 *  02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */

import React from 'react'
import { Component } from 'react'
import * as PropTypes from 'prop-types'
import {connect} from 'react-redux'
import TMXExportModal from '../../components/TMX/TMXExportModal'
import { isAdmin } from '../../config'
import { Grid, Col } from 'react-bootstrap'

import {
  showExportTMXModal
} from '../../actions/tmx-actions'

/**
 * Root component for Admin Page
 */
class Admin extends Component {
  static propTypes = {
    toggleTMXExportModal: PropTypes.func.isRequired
  }

  render () {
    if (!isAdmin) {
      return (
        <div className='wideView' id='admin'>
          <div className='u-centerBlock'>
            <p>You are not authorised to access to this page</p>
          </div>
        </div>
      )
    }
    return (
      <div className='page wideView' id='admin'>
        <div className='u-centerBlock'>
          <Grid>
            <Col xs={6}>
              Item 1
            </Col>
            <Col xs={6}>
              Item 2
            </Col>
          </Grid>
          <TMXExportModal />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTMXExportModal: (show) => {
      dispatch(showExportTMXModal(show))
    }
  }
}

export default connect(undefined, mapDispatchToProps)(Admin)
