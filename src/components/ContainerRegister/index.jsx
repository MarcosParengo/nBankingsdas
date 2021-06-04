import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormControl,
    CInputGroup,
    CInputGroupText,
    CRow
} from '@coreui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Containerlogin = () => {
    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                    <FontAwesomeIcon icon={faUser} />
                    </CInputGroupText>
                    <CFormControl placeholder="Username" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </CInputGroupText>
                    <CFormControl placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <FontAwesomeIcon icon={faLock} />
                    </CInputGroupText>
                    <CFormControl
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                    <FontAwesomeIcon icon={faLock} />
                    </CInputGroupText>
                    <CFormControl
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CButton color="success">
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    )
  }
export default Containerlogin
