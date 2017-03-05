var searchIndex = {};
searchIndex["glium_shapes"] = {"doc":"Prefabricated shapes for the Glium OpenGL library.","items":[[0,"axes","glium_shapes","A module for constructing axes locator shapes.",null,null],[3,"Axes","glium_shapes::axes","A set of orthogonal `Axes` lines.",null,null],[3,"AxesBuilder","","Responsible for building and returning an `Axes` object.",null,null],[11,"default","","",0,{"inputs":[],"output":{"name":"axesbuilder"}}],[11,"new","","Create a new `AxesBuilder` object.",0,{"inputs":[],"output":{"name":"axesbuilder"}}],[11,"scale","","Apply a scaling transformation to the shape.",0,null],[11,"translate","","Apply a translation transformation to the shape.",0,null],[11,"rotate_x","","Apply a rotation transformation to the shape about the x-axis.",0,null],[11,"rotate_y","","Apply a rotation transformation to the shape about the y-axis.",0,null],[11,"rotate_z","","Apply a rotation transformation to the shape about the z-axis.",0,null],[11,"build","","Build a new `Axes` object.",0,null],[11,"build_vertices","","Build the axes vertices and return them in a vector.",0,null],[0,"cuboid","glium_shapes","A module for constructing cuboid shapes.",null,null],[3,"Cuboid","glium_shapes::cuboid","A polygonal `Cuboid` object.",null,null],[3,"CuboidBuilder","","Responsible for building and returning a `Cuboid` object.",null,null],[11,"default","","",1,{"inputs":[],"output":{"name":"self"}}],[11,"new","","Create a new `CuboidBuilder` object.",1,{"inputs":[],"output":{"name":"cuboidbuilder"}}],[11,"scale","","Apply a scaling transformation to the shape.",1,null],[11,"translate","","Apply a translation transformation to the shape.",1,null],[11,"rotate_x","","Apply a rotation transformation to the shape about the x-axis.",1,null],[11,"rotate_y","","Apply a rotation transformation to the shape about the y-axis.",1,null],[11,"rotate_z","","Apply a rotation transformation to the shape about the z-axis.",1,null],[11,"build","","Build a new `Cuboid` object.",1,null],[11,"build_vertices","","Build the shape vertices and return them in a vector.",1,null],[0,"errors","glium_shapes","A module containing the error structures for this crate.",null,null],[4,"ShapeCreationError","glium_shapes::errors","The error object that is returned when a shape fails to build.",null,null],[13,"VertexBufferCreationError","","The shape failed to build because vertex buffer could not be created.",2,null],[13,"NotEnoughDivisionsInU","","The shape failed to build because the number of divisions in the u axis\nis too small.",2,null],[13,"NotEnoughDivisionsInV","","The shape failed to build because the number of divisions in the v axis\nis too small.",2,null],[11,"fmt","","",2,null],[11,"clone","","",2,null],[11,"description","","",2,null],[11,"cause","","",2,null],[11,"from","","",2,{"inputs":[{"name":"buffercreationerror"}],"output":{"name":"self"}}],[11,"fmt","","",2,null],[0,"quad","glium_shapes","A module for constructing polygonal quad shapes.",null,null],[3,"Quad","glium_shapes::quad","A polygonal quad.",null,null],[3,"QuadBuilder","","Responsible for building and returning a `Quad` object.",null,null],[11,"default","","",3,{"inputs":[],"output":{"name":"quadbuilder"}}],[11,"new","","Create a new `QuadBuilder` object.",3,{"inputs":[],"output":{"name":"quadbuilder"}}],[11,"scale","","Apply a scaling transformation to the shape.",3,null],[11,"translate","","Apply a translation transformation to the shape.",3,null],[11,"rotate_x","","Apply a rotation transformation to the shape about the x-axis.",3,null],[11,"rotate_y","","Apply a rotation transformation to the shape about the y-axis.",3,null],[11,"rotate_z","","Apply a rotation transformation to the shape about the z-axis.",3,null],[11,"build","","Build a new `Quad` object.",3,null],[11,"build_vertices","","Build the Quad vertices and return them in a vector.",3,null],[0,"sphere","glium_shapes","A module for constructing sphere shapes.",null,null],[3,"Sphere","glium_shapes::sphere","A polygonal `Sphere` object.",null,null],[3,"SphereBuilder","","Responsible for building and returning a `Sphere` object.",null,null],[11,"default","","",4,{"inputs":[],"output":{"name":"self"}}],[11,"new","","Create a new `SphereBuilder` object.",4,{"inputs":[],"output":{"name":"spherebuilder"}}],[11,"with_divisions","","Specify the number of divisions to make in the u direction (horizontal),\nand v direction (vertical). By default, the builder will use 12 divisions\nin both axes.",4,null],[11,"scale","","Apply a scaling transformation to the shape.",4,null],[11,"translate","","Apply a translation transformation to the shape.",4,null],[11,"rotate_x","","Apply a rotation transformation to the shape about the x-axis.",4,null],[11,"rotate_y","","Apply a rotation transformation to the shape about the y-axis.",4,null],[11,"rotate_z","","Apply a rotation transformation to the shape about the z-axis.",4,null],[11,"build","","Build a new `Sphere` object.",4,null],[11,"build_vertices","","Build the shape vertices and return them in a vector.",4,null],[11,"num_caps","","Returns the number of caps in the resultant sphere geometry. The current implementation\nwill always return 2.",4,null],[11,"num_vertices_per_cap_face","","Returns the number of vertices generated for each cap face. The current implementation\nwill always return 3.",4,null],[11,"num_vertices_per_cap","","Returns the total number of vertices in each cap.",4,null],[11,"num_slices","","Returns the number of vertical slices in the resultant sphere geometry. The resultant\nvalue will depend on the number of v divisions specified on the builder.",4,null],[11,"num_vertices_per_slice_face","","Returns the total number of vertices in each vertical slice face (e.g. excluding caps).\nThe current implementation will always return 6.",4,null],[11,"num_vertices_per_slice","","Returns the total number of vertices in each vertical slice.",4,null],[11,"num_vertices","","Returns the total number of vertices that will be generated by the builder.",4,null],[0,"vertex","glium_shapes","A module containing the vertex structure shared across all shapes.",null,null],[3,"Vertex","glium_shapes::vertex","The vertex structure shared across all shapes.",null,null],[12,"position","","",5,null],[12,"normal","","",5,null],[12,"texcoord","","",5,null],[11,"clone","","",5,null],[11,"fmt","","",5,null],[11,"build_bindings","","",5,{"inputs":[],"output":{"name":"vertexformat"}}]],"paths":[[3,"AxesBuilder"],[3,"CuboidBuilder"],[4,"ShapeCreationError"],[3,"QuadBuilder"],[3,"SphereBuilder"],[3,"Vertex"]]};
initSearch(searchIndex);