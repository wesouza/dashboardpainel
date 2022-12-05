export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-1  col-xl-2 min-vh-100 d-flex justify-content-center"
            style={{ background: "#00aaa5" }}
          >
            <ul className="nav pt-4 align-self-start  align-items-start d-flex">
              <li className="nav-link">
                <a href="#" className="text-white text-decoration-none fs-6">
                  <i className="bi bi-speedometer2 p-2"></i>
                  <span className="d-none d-xl-inline-block">Dashboard</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#" className="text-white text-decoration-none fs-6">
                  <i class="bi bi-people p-2"></i>
                  <span className="d-none d-xl-inline-block">Usuários</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#" className="text-white text-decoration-none fs-6">
                  <i class="bi bi-people p-2"></i>
                  <span className="d-none d-xl-inline-block">Responsáveis</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#" className="text-white text-decoration-none fs-6">
                  <i class="bi bi-people p-2"></i>
                  <span className="d-none d-xl-inline-block">Usuários</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="row p-4">
              <h3>Dashboard</h3>
              <div className="col pt-4">
                <div className="card border-0">
                  <div className="card-header border-0 lh-1">
                    <h5>Novo Usuário</h5>
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="#">Lista de usuários</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          Novo usuário
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="card-body">#form</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
