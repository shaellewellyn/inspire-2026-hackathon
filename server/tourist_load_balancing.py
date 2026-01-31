import heapq
#Sample values.
areas={"Downtown":{"Capacity":500, "Current load":250, "Attractiveness":1},
     "Oak Bay":{"Capacity":225, "Current load":250, "Attractiveness":10},
     "Inner Harbour":{"Capacity":625, "Current load":625, "Attractiveness":7},
     "Saanich":{"Capacity":120, "Current load":100, "Attractiveness":5},
     "Langford":{"Capacity":335, "Current load":150, "Attractiveness":2}}

def stress(area):
    # low stress lies between 0 and 1 because of the small numerator
    return area["Current load"]/area["Capacity"]

def recommended_areas(areas):
    recommended_areas_list=[]
    for name,area in areas.items():
        #More stress makes area less attractive
        #Less stress leads to a negative score=>Area is better for visiting
        #More stress leads to a higher score=> Area is not recommended for visiting
        stress_score=(stress(area)*10)-area["Attractiveness"]
        recommended_areas_list.append((stress_score,name,area["Attractiveness"]/2))
    heapq.heapify(recommended_areas_list)
    for score,name,rating in recommended_areas_list:
        
        print(f"{name}: {rating}")
    

def recommend_an_area(areas):
    area_list=recommended_areas(areas)
    print(area_list[0][1]) 


def update_capacity(area, n:int):
    area["Capacity"]=n




def update_load(area, n:int):
    area["Current Load"]=n


def update_attractiveness(area,n:int):#attractiveness=rating*2
    area["Attractiveness"]=n*2

def add_area(new_area:str):
    if new_area not in areas:
        capacity=int(input("Area capacity: ")) 
        current_load=int(input("Current load:")) 
        attractiveness=int(input("Attractiveness:")) #on a scale of 1 to 10
        areas[new_area]={"Capacity":capacity,"Current load":current_load,"Attractiveness":attractiveness}
    else:
        print("Area has already been listed")

def get_area_info(area_name):
    if area_name in areas:
        area=areas[area_name] 
        print(area_name+":\n"+
              "Capacity : "+str(area["Capacity"])+
              "\n"+"Current Load : "+str(area["Current load"])+
              "\n"+"Attractiveness : "+str(area["Attractiveness"]))
    






    


#recommended_areas(areas)
#recommend_an_area(areas)
recommended_areas(areas)






