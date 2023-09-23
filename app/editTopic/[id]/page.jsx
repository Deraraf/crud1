import EditTopicForm from "../../../components/EditTopicForm"
 const getTopicById = async(id) =>{
  try {
  const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
    cache:"no-store"
  })
 if(!res.ok){
  throw new Error('faild to fetch topic')
 }

 return res.json()

  } catch (error) {
    console.log('faild to edit topic',error)
  }
 }
const EditTopic = async({params}) => {
  const {id} = params;
  const {topic} = await getTopicById(id);
  const {title,description} = topic;
  return (
    <EditTopicForm id ={id} title ={title} description = {description} />
  )
}

export default EditTopic