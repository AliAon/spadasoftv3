import Pagination from 'react-bootstrap/Pagination';

function ListPagination(props) {
  const {pages,currentPage,firstindex,lastindex,totalpages}=props;
  const onchangepagehandler=(index)=>{
    props.CurrentSetPage(index)
  }
  const paginations=pages.map((el)=>{
    return(
      <Pagination.Item onClick={onchangepagehandler.bind(null,el)} active={ el==currentPage && true }>{el}</Pagination.Item>
    )
  })
  const goPrePageHandler=()=>{
    if(currentPage!==1){
      props.CurrentSetPage(currentPage-1)
    }
  }
  const goNextPageHandler=()=>{
    if(currentPage!==totalpages){
      props.CurrentSetPage(currentPage+1)
    }
  }
  const goFirstPageHandler=()=>{
      props.CurrentSetPage(1)
  }
  const goLastPageHandler=()=>{
    props.CurrentSetPage(totalpages)
}
  return (
    <Pagination>
      <Pagination.First  onClick={goFirstPageHandler} />
      <Pagination.Prev onClick={goPrePageHandler}/>
      {paginations}
      {/* <Pagination.Ellipsis /> 
      <Pagination.Item active>{12}</Pagination.Item>*/}
      <Pagination.Next onClick={goNextPageHandler} />
      <Pagination.Last onClick={goLastPageHandler} /> 
    </Pagination>
  );
}

export default ListPagination;