/* eslint-disable react/prop-types */
import { Editor } from '@tinymce/tinymce-react'
import { Controller  } from 'react-hook-form'
export default function RTE(
    {
        name,control,label , defaultValue=""
    }
) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
        <Controller
        name={name || "name"}
        control={control}
        render={({field:{onChange}})=>(
            <Editor
            initialValue={defaultValue}
            apiKey='f6fu08dxczpowrvpjsmsu9z2yy64qe534zv9p87h80bwgqki'
            init={{
                height : 500,
                menubar:true,
                plugins : [
                   "image",
                   "advlist",
                   "autolink",
                   "lists",
                   "link" 
                   ,"charmap",
                   "preview",
                   "anchor",
                   "searchreplace",
                   "visualblocks",
                   "code",
                   "fullscreen",
                   "inserdatetime",
                   "media",
                   "table",
                   "help",
                   "wordcount",
                ],
              toolbar:"undo redo | blocks | image | bold italic forecolor | alignleft aligncenter  |  alignight alignjustify | bullist numlist outdent indent | removeformate | help",
              content_style : "body {font-family:Helvetica,Arial,sans-serif; font-size:14px}"
                
            }}
            onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
}

